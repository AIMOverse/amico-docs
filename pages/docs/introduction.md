# Introduction

## What is Amico?

Amico is a next-generation Autonomous AI framework and runtime designed for embedded devices and multi-agent systems. It is natively integrated with the Solana ecosystem utilizing [listen-rs](https://www.listen-rs.com/), enabling AI agents to autonomously make decisions and take on-chain actions.

Built on top of the [Rig framework](https://rig.rs), Amico offers a comprehensive set of features, including:

- Autonomous AI runtime for embedded devices
- Support for multi-agent systems
- Autonomous AI for on-chain actions
- Proof-of-Agenthood (PoA) utilizing Trusted Execution Environments (TEE)

### Key Features

- **Autonomous AI Agents**

  - Amico agents make decisions autonomously based on events, the external envinronment, and their internal knowledge base, requiring no human input.

- **Designed for Embedded Devices**

  - Amico is specifically designed for embedded devices, because agents with independent computing power are **real** autonomous agents.
  - Agents can acquire information from the real world via sensors, cameras, GPS, etc., and respond to events via actuators.

- **Native Web3 Integration**

  - Amico integrates seamlessly with the Solana ecosystem using the [listen-rs](https://www.listen-rs.com/) SDK, allowing agents to have their own wallets and autonomously interact with the Solana blockchain.
  - The framework also supports other major Web3 ecosystems, including EVM chains.

- **Multi-Agent Consensus**

  - Amico facilitates communication between autonomous agents, fostering decentralization within the agent community.
  - For certain scenarios, partial consensus mechanisms can be used, instead of requiring full agreement among all agents.
  - These consensus mechanisms also play a critical role in the Proof-of-Agenthood system.

## Architecture Overview

![Task Execution Workflow](/amico-docs/task-exec.png)

### Task Execution Workflow

- **Event-Triggered Task**

  - Tasks are triggered by various events, such as timers, major on-chain or off-chain events, or signals from other agents.
  - Each event carries context, which is then used as an additional knowledge source when the agent gathers information.

- **Knowledge Acquisition**

  - The agent collects relevant knowledge from its internal knowledge base as well as the context of the event.
  - If needed, the agent can also acquire real-time data from on-chain or off-chain sources.
  - The agent synthesizes all this information into a comprehensive report to guide its decision-making process.

- **Decision Making**

  - Using the knowledge report, the agent evaluates possible actions and makes an informed decision.
  - The agent can either respond to the user, execute a task, or do both.
  - For critical decisions, the agent may seek consensus from other agents to ensure the reliability of the decision.

- **Execution of Decision**

  - The agent carries out the chosen action, which could range from executing a transaction to posting content (e.g., a tweet).
  - If the action requires consensus, the agent will first consult with other agents before proceeding.

- **Agent Response**

  - Following execution, the agent can provide feedback to the user, similar to a chatbot's response.
  - This response could also include instructions for an embedded device, such as triggering a motor or adjusting the environment in some way.

## What's Next?

Getting started with Amico is easy!

If you're using Amico to build your own Autonomous AI agent, check out our [Getting Started Guide](/docs/getting-started) for step-by-step instructions on how to set up your first agent.

If you're interested in contributing to Amico, check out our [Contributing Guide](/docs/contributing) and [Package Development Guide](/docs/packages/overview) for instructions on how to contribute to the project.
