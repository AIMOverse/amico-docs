# Introduction

## What is Amico?

Amico is an Event-based Autonomous AI Agent Framework written in Rust tailered for embedded AI devices and multi-agent systems. It is designed with high scalability and flexibility for customization, while remains simple to use and deploy autonomous AI agents on all-kinds of devices.

Amico is natively integrated with the Solana ecosystem, enabling AI agents to autonomously make decisions and take on-chain actions.

Amico offers a comprehensive set of features, some hightlights including:

- Ideal for deploy Autonomous AI agent in a variaty of scenarios, with tailed support for embedded devices
- Support for multi-agent collboration & coordination
- Autonomous AI agents with on-chain actions capabilities
- Low-Code development & deployement with runtime support

### Key Features

- **Event-based Autonomous AI Agents**

  - Event is abstract in Amico, refers to any external triggers that can be the inputs to AI. This abstraction enables agents to respond to all-kinds of signals without human intervention.

  - Amico agents make decisions autonomously based on events, the external environment, and their internal knowledge base, requiring no human input.

- **Designed for Embedded Devices**

  - Thanks to the Rust language's support and security for embedded systems, a one-click deployment runtime, and plug-in capabilities for calling hardware modules, Amico can be adapted to most consumer-grade end-side ai electronic hardware.

  - Any consumer-grade end-side ai hardware that uses Amico can directly use Amico's on-chain interaction module with the functionality of a Depin device.

- **Support for Multi-Agent Collaboration & Coordination**

  - Amico enables privacy-preserving communication between agents, fostering safety, trustibility,and decentralization within the agent community.
  - For certain critical scenarios, full/partial consensus between autonomous AI agents can be achieved through Amico, ensuring optimal decision-making.
  - Proof-of-Agenthood (PoA) is a consensus mechanism we are working on, which aims to prove actions & decisions are made by the agent automously, rather by human.

## Architecture Overview

### Framework Modules

![Framework](https://raw.githubusercontent.com/AIMOverse/amico/refs/heads/main/images/framework.png)

- **Framework Layers**

  - The **Interaction Layer** manages the communication between agents and the environment. In this layer, **sensors** are used to acquire the current state of the environment, and **effectors** are used to execute actions. The environment the layer interacts to is not only real-world but also virtual environments like the Internet or a block chain. The drivers for real-world hardware sensors and effectors are implemented in `amico-firmware` crate.
  - The **Agent Layer** encapsulates the core logic of the agent, including state management, decision-making, and action execution. The concrete **LLM Providers** and **RAG Systems** are implemented in plugins. The framework provides several **Task execution model** (see the *Model-Based Agents* section below) implementations in the `amico-std` crate, but you can also write your own implementations in plugins.
  - The **Engine Layer** implements the core logic of task scheduling, event generation and action selection based on events. The framework provides an implementation of **Action Selector** based on mapping in the `amico-std` crate, but you can also write your own implementations in plugins.

- **Plugins**

  - **Effectors**: Perform actions like hardware module control, transaction execution, content posting, sending messages to other agents, etc.
  - **Sensors**: Acquire the current state of the environment like sensor reading, social media content reading, receiving messages from other agents, etc.
  - **LLM Providers**: Providing API access to LLM services like OpenAI, DeepSeek, etc.
  - **Firmware Drivers**: Providing a low-level interface for interacting with embedded devices.

- **Low-Level Plugins**

  - **RAG Systems**: Providing a retrieval-augmented generation system.
  - **Task Executors**: Providing a task execution workflow, like Model-Based Agents described below.
  - **Action Selectors**: Providing an action selection algorithm, to select the most appropriate action given the current state and the available actions.

### Model-Based Agents

![Basic Design](https://raw.githubusercontent.com/AIMOverse/amico/refs/heads/main/images/model_based.png)

- **State Representation**: The state agent acquires the current state of the environment through sensors and represents it. This state describes the specific situation of the current world, such as the attributes of location, resources, or objects.
- **World Evolution**: Predicts the impact of actions.
- **Condition-Action Rules**: Module for decision-making.

### Task Execution Workflow

![Task Execution Workflow](https://raw.githubusercontent.com/AIMOverse/amico/refs/heads/main/images/task_exec.png)

- **Event-Triggered Task**

  - Tasks are triggered by various "events", such as timers, major on-chain or off-chain events, or signals from other agents.
  - Each event carries context, the information of the event in natural language, which is then used as an additional knowledge source when the agent gathers information.

- **Knowledge Acquisition**

  - The agent collects relevant knowledge from its internal knowledge base as well as the context of the event.
  - If needed, the agent can also acquire real-time data sources from both on-chain and off-chain environments.
  - The agent synthesizes all these informations into a comprehensive report to guide its decision-making process.

- **Decision Making**

  - Using the knowledge report, the agent evaluates possible actions and makes fully-informed decisions.
  - The agent can either respond to the user, execute a task, or do both.
  - For critical decisions, the agent may optionally seek consensus from other agents to ensure the reliability of the decision in a SWARM-system environment.

- **Execution of Decision**

  - The agent carries out the chosen action, which could range from executing a transaction to posting content (e.g., a tweet).
  - If the action requires consensus, the agent will optinally first communicate with other agents before proceeding.

- **Agent Response**

  - Following execution, the agent can provide feedback to the user in human-readable way.
  - This response could also include instructions (tool calls) for embedded devices, such as triggering a motor or adjusting the environment in some way.

## What's Next?

Getting started with Amico is easy!

If you're using Amico to build your own Autonomous AI agent, check out our [Getting Started Guide](/docs/getting-started) for step-by-step instructions on how to set up your first agent.

If you're interested in contributing to Amico, check out our [Contributing Guide](/docs/contributing) and [Package Development Guide](/docs/packages/overview) for instructions on how to contribute to the project.
