# AI Workflow Comparison

For this exercise, I implemented the same settings form twice using two different prompting approaches.

## Round 1 – Vague Prompt

The first implementation used a simple prompt asking the AI to build a settings form. The generated code produced a functional interface with basic settings controls, but it lacked important requirements such as input validation, accessibility improvements, and structured verification. I had to manually review the output to determine whether it met the project requirements.

## Round 2 – Structured Prompt

The second implementation used a detailed prompt that specified the required fields, validation rules, accessibility requirements, JavaScript instead of TypeScript, semantic HTML, and a verification process. I also instructed the AI to review its own work and run a production build before finishing.

The resulting implementation included required name and email validation, accessible labels, validation messages, a disabled Save button until the form was valid, and a successful build verification. The AI also identified and fixed a small UX issue where the success message remained visible after editing the form again.

## Comparison

The structured prompt produced higher-quality code with less manual review. The output was more complete, easier to understand, and included verification steps that increased confidence in the final result.

Although writing the structured prompt took longer initially, it reduced the overall development time because fewer manual fixes were required.

## AI Mistake I Caught

During the first round, the AI initially generated TypeScript components even though my project was configured for JavaScript. I corrected the prompt so the generated code matched the project's technology stack.

## Conclusion

This exercise demonstrated that carefully specifying requirements, constraints, and verification steps results in more reliable AI-generated code. A structured workflow produces better software quality and reduces review effort compared to using a vague prompt.