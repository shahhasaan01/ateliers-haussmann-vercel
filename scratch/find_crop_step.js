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
    if (step.step_index >= 1100) continue;
    
    // Check if step content contains qualisol.jpg and any scripting/command
    if (JSON.stringify(step).includes('qualisol.jpg') && (JSON.stringify(step).includes('PowerShell') || JSON.stringify(step).includes('script') || JSON.stringify(step).includes('Add-Type') || JSON.stringify(step).includes('Drawing') || JSON.stringify(step).includes('crop'))) {
      console.log(`Step ${step.step_index} (${step.type}):`);
      if (step.tool_calls) {
        for (const tc of step.tool_calls) {
          console.log(`Tool call: ${tc.name}`);
          if (tc.args && tc.args.CommandLine) {
            console.log(`CommandLine: ${tc.args.CommandLine}`);
          }
          if (tc.args && tc.args.CodeContent) {
            console.log(`CodeContent: ${tc.args.CodeContent}`);
          }
        }
      }
      console.log('---');
    }
  } catch (e) {}
}
