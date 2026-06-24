const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:\\Users\\Computer House\\.gemini\\antigravity\\brain\\065e889b-9a67-42c3-ac9f-d63afa6a27cc\\.system_generated\\logs\\transcript_full.jsonl';

if (!fs.existsSync(transcriptPath)) {
  console.error('Transcript file does not exist:', transcriptPath);
  process.exit(1);
}

const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  try {
    const step = JSON.parse(line);
    if (step.step_index >= 1100) continue; // ignore current run steps
    
    let matched = false;
    if (JSON.stringify(step).toLowerCase().includes('qualisol') || JSON.stringify(step).toLowerCase().includes('crop')) {
      matched = true;
    }
    
    if (matched) {
      if (step.tool_calls) {
        for (const tc of step.tool_calls) {
          if (JSON.stringify(tc).toLowerCase().includes('qualisol') || JSON.stringify(tc).toLowerCase().includes('crop')) {
            console.log(`Step ${step.step_index} (${step.type}) [${tc.name}]:`);
            const copy = JSON.parse(JSON.stringify(tc));
            if (copy.args && copy.args.CodeContent && copy.args.CodeContent.length > 300) {
              copy.args.CodeContent = copy.args.CodeContent.substring(0, 300) + '... [TRUNCATED]';
            }
            if (copy.args && copy.args.CommandLine && copy.args.CommandLine.length > 300) {
              copy.args.CommandLine = copy.args.CommandLine.substring(0, 300) + '... [TRUNCATED]';
            }
            console.log(JSON.stringify(copy, null, 2));
            console.log('---');
          }
        }
      }
    }
  } catch (e) {}
}
