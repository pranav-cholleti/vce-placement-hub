export default defineComponent({
  async run({ steps, $ }) {
    // NOTE: The path to the Gemini step might be 'steps.code.$return_value' 
    // or 'steps.google_generative_ai_1.$return_value' depending on how you named it.
    // Please verify the correct path in the Pipedream UI.
    const data = steps.node_1.$return_value.structuredData; 
    const originalText = steps.node_1.$return_value.originalText;
    const updateHeader = `**Update on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}**`;

    return `---
company: "${data.company || 'N/A'}"
role: "${data.role || 'N/A'}"
ctc: "${data.ctc || 'N/A'}"
stipend: "${data.stipend || 'N/A'}"
deadline: "${data.deadline || 'N/A'}"
batch: "${data.batch || 'N/A'}"
applicationLink: "${data.applicationLink || ''}"
---

## Timeline of Updates

${updateHeader}

> ${originalText.replace(/\n/g, '\n> ')}
`
  },
})