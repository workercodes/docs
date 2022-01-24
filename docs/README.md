---
home: true
title: Home
heroImage: /images/hero.png
actions:
  - text: Get Started
    link: /getting-started.html
    type: primary
  - text: Tutorials
    link: /tutorials/
    type: secondary
  - text: Runtime API
    link: /runtime/
    type: secondary
features:
  - title: Deploy in seconds
    details:  Deploy a lightweight scalable HTTP endpoint without deploying or scaling servers.
  - title: Super fast & highly scalable
    details: We automatically scales compute capacity as demand changes, with zero cold-starts.
  - title: Affordable
    details: Worker Codes is much less expensive than other serverless platforms, pay only when your code runs.
  - title: No servers to maintain
    details: Write and deploy code without the hassle of worrying about the underlying infrastructure.
  - title: Unlimited databases
    details: Lightweight fully-managed, fast, scalable and secure SQL database. 
  - title: Unlimited drives.
    details: Store with unlimited scalability, for any file
footer: Copyright © 2022-present Worker Codes
---

### Quick Start

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# install in your project
yarn global add @workercodes/cli

# confirm that the installation was successful
wkr --version

# authenticate the CLI
wkr config

# create a new project
wkr generate my-worker && cd my-worker

# deploy project
wkr publish

```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
# install in your project
npm install -g @workercodes/cli

# confirm that the installation was successful
wkr --version

# authenticate the CLI
wkr config

# create a new project
wkr generate my-worker && cd my-worker

# deploy project
wkr publish

```

  </CodeGroupItem>
</CodeGroup>