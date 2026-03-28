// ─── Palette ──────────────────────────────────────────────────────────────────
export const PALETTE = [
  '#e63946','#f4a261','#2a9d8f','#457b9d','#6a4c93',
  '#e76f51','#264653','#2196f3','#8338ec','#fb5607',
  '#06d6a0','#118ab2','#ef476f','#ffd166','#073b4c',
  '#3a86ff','#ff006e','#8ecae6','#023047','#c77dff',
  '#52b788','#b5838d','#6d6875','#e9c46a','#219ebc',
  '#023e8a','#d62828','#f77f00','#fcbf49','#eae2b7',
]

// ─── Topics ───────────────────────────────────────────────────────────────────
export const CLOUD_TOPICS = [
  'AWS','Azure','Cloud Migration','Cloud Networking','Cloud Security & DevSecOps',
  'Cloud Storage & Databases','Data Engineering','FinOps & Cloud Cost Management',
  'Google Cloud Platform','Infrastructure as Code','Kubernetes & Containers',
  'Multi-Cloud Strategy','Platform Engineering','Serverless Architecture',
  'Site Reliability Engineering (SRE)',
]

export const AI_TOPICS = [
  'AI Agents & Automation','AI Ethics & Governance','AI in Cybersecurity',
  'Computer Vision','Data Science & Analytics','Fine-tuning & Model Adaptation',
  'Generative AI for Business','Large Language Models (LLMs)',
  'Machine Learning Fundamentals','MLOps & Model Deployment',
  'Natural Language Processing (NLP)','Prompt Engineering','Responsible AI',
  'Retrieval-Augmented Generation (RAG)','UX / Front-End AI Tooling',
]

export const ALL_TOPICS = [...CLOUD_TOPICS, ...AI_TOPICS]

// ─── Learning links ───────────────────────────────────────────────────────────
export const LINKS = {
  'AWS': [
    { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com', description: 'The official reference for every AWS service, ideal for deep-dives and troubleshooting specific features.' },
    { title: 'AWS Skill Builder', url: 'https://skillbuilder.aws', description: "AWS's own learning platform with free and paid courses aligned directly to AWS certifications." },
    { title: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/', description: 'Framework for reviewing and improving cloud architectures across five pillars including security and reliability.' },
    { title: 'A Cloud Guru', url: 'https://acloudguru.com/aws-cloud-training', description: 'Hands-on labs and structured courses trusted by thousands of professionals preparing for AWS certifications.' },
    { title: 'freeCodeCamp AWS', url: 'https://www.freecodecamp.org/news/tag/aws/', description: 'Community-written tutorials and guides covering AWS services with practical, beginner-friendly examples.' },
  ],
  'Azure': [
    { title: 'Microsoft Learn – Azure', url: 'https://learn.microsoft.com/en-us/azure/', description: 'The official Microsoft learning path for Azure with free, structured modules and sandboxed lab environments.' },
    { title: 'Azure Architecture Center', url: 'https://learn.microsoft.com/en-us/azure/architecture/', description: 'Reference architectures and design patterns for building reliable, scalable Azure solutions.' },
    { title: 'AZ-900 Fundamentals', url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/', description: 'The entry-level Azure certification pathway, great for building a solid foundation in cloud concepts.' },
    { title: 'Azure Friday Videos', url: 'https://learn.microsoft.com/en-us/shows/azure-friday/', description: 'Short video interviews with Azure engineers covering the latest features and real-world use cases.' },
    { title: "John Savill's Azure Course", url: 'https://www.youtube.com/@NTFAQGuy', description: 'A popular free deep-dive course on YouTube covering Azure architecture and certification preparation.' },
  ],
  'Google Cloud Platform': [
    { title: 'Google Cloud Skills Boost', url: 'https://cloudskillsboost.google', description: "Google's official lab-based learning platform with quests and learning paths aligned to GCP certifications." },
    { title: 'GCP Documentation', url: 'https://cloud.google.com/docs', description: 'Comprehensive official docs for all Google Cloud services, regularly updated by Google engineers.' },
    { title: 'Coursera – Google Cloud', url: 'https://www.coursera.org/googlecloud', description: 'Structured specialisations co-created by Google, combining video lectures with hands-on projects.' },
    { title: 'Google Cloud Blog', url: 'https://cloud.google.com/blog', description: 'Up-to-date announcements, tutorials, and customer stories directly from the Google Cloud team.' },
    { title: 'GCP YouTube Channel', url: 'https://www.youtube.com/@googlecloud', description: 'Video content covering new product launches, tutorials, and customer case studies from Google Cloud.' },
  ],
  'Cloud Migration': [
    { title: 'AWS Migration Hub', url: 'https://aws.amazon.com/migration-hub/', description: 'Centralised AWS tool to plan, track, and manage migrations across multiple AWS services and partners.' },
    { title: 'Azure Migrate', url: 'https://azure.microsoft.com/en-us/products/azure-migrate/', description: "Microsoft's end-to-end migration platform for assessing and moving on-premises workloads to Azure." },
    { title: 'Google Cloud Migration', url: 'https://cloud.google.com/solutions/migration-center', description: "Google's migration centre and tooling to assess, plan, and execute cloud migrations at scale." },
    { title: 'Gartner Cloud Migration', url: 'https://www.gartner.com/en/information-technology/topics/cloud-migration', description: 'Analyst-led research and frameworks for planning enterprise-scale cloud migration strategies.' },
    { title: 'CNCF Projects', url: 'https://www.cncf.io/projects/', description: 'Open-source cloud-native tools that support migration, portability, and modernisation of applications.' },
  ],
  'Cloud Networking': [
    { title: 'AWS Networking Fundamentals', url: 'https://aws.amazon.com/getting-started/hands-on/net-to-vpc/', description: 'Hands-on guide to building your first VPC and understanding core AWS networking concepts.' },
    { title: 'Azure Networking Overview', url: 'https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview', description: 'Official overview of Azure networking services including VNets, load balancers, and gateways.' },
    { title: 'GCP VPC Docs', url: 'https://cloud.google.com/vpc/docs/overview', description: "Google's documentation for Virtual Private Cloud covering networking architecture and configuration." },
    { title: 'Cloudflare Learning', url: 'https://www.cloudflare.com/learning/cloud/what-is-cloud-networking/', description: 'Clear, jargon-free explanations of cloud networking concepts suitable for all experience levels.' },
    { title: 'CNCF Networking', url: 'https://www.cncf.io/projects/', description: 'Open-source networking projects for cloud-native environments including service meshes and CNI plugins.' },
  ],
  'Cloud Security & DevSecOps': [
    { title: 'OWASP Cloud Security', url: 'https://owasp.org/www-project-cloud-native-application-security-top-10/', description: 'The top 10 cloud-native application security risks with practical mitigation guidance.' },
    { title: 'AWS Security Best Practices', url: 'https://aws.amazon.com/architecture/security-identity-compliance/', description: "AWS's recommended security controls and architecture patterns for securing cloud workloads." },
    { title: 'DevSecOps – GitLab', url: 'https://about.gitlab.com/topics/devsecops/', description: 'Practical guide to embedding security into the CI/CD pipeline without slowing down delivery teams.' },
    { title: 'NIST Cloud Security', url: 'https://www.nist.gov/programs-projects/nist-cloud-computing-program', description: 'Authoritative US government framework for cloud security standards and risk management practices.' },
    { title: 'Snyk Learn', url: 'https://learn.snyk.io', description: 'Interactive, developer-focused security education covering common vulnerabilities and how to fix them.' },
  ],
  'Cloud Storage & Databases': [
    { title: 'AWS Database Services', url: 'https://aws.amazon.com/products/databases/', description: "Overview of AWS's full database portfolio from RDS to DynamoDB, with use-case selection guidance." },
    { title: 'Azure Data Services', url: 'https://azure.microsoft.com/en-us/products/category/databases/', description: "Microsoft's range of managed database and analytics services for cloud-native applications." },
    { title: 'GCP Storage Options', url: 'https://cloud.google.com/storage-options', description: "Decision guide for choosing between Google Cloud's storage and database products for your use case." },
    { title: 'MongoDB Cloud', url: 'https://www.mongodb.com/cloud', description: 'Documentation and learning resources for building with MongoDB Atlas, the fully managed cloud database.' },
    { title: 'Coursera Database Design', url: 'https://www.coursera.org/learn/intro-to-databases', description: 'Beginner-friendly course covering relational database design and SQL fundamentals from first principles.' },
  ],
  'Data Engineering': [
    { title: 'DataTalks.Club', url: 'https://datatalks.club', description: 'Free community-run data engineering bootcamp and courses, widely regarded for practical hands-on learning.' },
    { title: 'dbt Learn', url: 'https://courses.getdbt.com', description: 'Official courses for dbt, the leading SQL transformation tool used across modern data stacks.' },
    { title: 'Apache Spark Docs', url: 'https://spark.apache.org/docs/latest/', description: 'The official reference for Spark, the go-to framework for large-scale distributed data processing.' },
    { title: 'Airflow Docs', url: 'https://airflow.apache.org/docs/', description: 'Documentation for Apache Airflow, the most widely used workflow orchestration tool for data pipelines.' },
    { title: 'Fundamentals of Data Eng.', url: 'https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/', description: "O'Reilly book covering the full data engineering lifecycle from ingestion to serving." },
  ],
  'FinOps & Cloud Cost Management': [
    { title: 'FinOps Foundation', url: 'https://www.finops.org', description: 'The definitive community and certification body for cloud financial management best practices.' },
    { title: 'AWS Cost Explorer', url: 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/', description: "AWS's native tool for visualising, analysing, and forecasting your cloud spend over time." },
    { title: 'Azure Cost Management', url: 'https://azure.microsoft.com/en-us/products/cost-management/', description: "Microsoft's built-in tooling for monitoring, allocating, and optimising Azure costs across teams." },
    { title: 'GCP Cost Management', url: 'https://cloud.google.com/cost-management', description: "Google Cloud's cost visibility and budgeting tools to control and optimise your GCP spend." },
    { title: 'FinOps Certification', url: 'https://learn.finops.org', description: 'The industry-recognised FinOps Practitioner certification pathway from the FinOps Foundation.' },
  ],
  'Infrastructure as Code': [
    { title: 'Terraform Learn', url: 'https://developer.hashicorp.com/terraform/tutorials', description: "HashiCorp's official interactive tutorials for learning Terraform, the most widely used IaC tool." },
    { title: 'Pulumi Docs', url: 'https://www.pulumi.com/docs/', description: 'Documentation for Pulumi, which lets you define infrastructure using familiar programming languages.' },
    { title: 'AWS CloudFormation', url: 'https://docs.aws.amazon.com/cloudformation/', description: "AWS's native IaC service for defining and provisioning AWS resources using JSON or YAML templates." },
    { title: 'Ansible Docs', url: 'https://docs.ansible.com', description: 'Official documentation for Ansible, the popular agentless automation and configuration management tool.' },
    { title: 'HashiCorp IaC Best Practices', url: 'https://www.hashicorp.com/resources/infrastructure-as-code-best-practices', description: "HashiCorp's guide to structuring, testing, and maintaining production-grade Terraform code." },
  ],
  'Kubernetes & Containers': [
    { title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/home/', description: 'The official K8s documentation, covering everything from core concepts to advanced cluster operations.' },
    { title: 'Docker Getting Started', url: 'https://docs.docker.com/get-started/', description: "Docker's beginner guide for understanding containerisation and building your first images." },
    { title: 'CNCF Training', url: 'https://www.cncf.io/training/', description: 'Vendor-neutral Kubernetes and cloud-native training with paths to CKA and CKAD certifications.' },
    { title: 'KodeKloud K8s', url: 'https://kodekloud.com/courses/kubernetes-for-beginners/', description: 'Highly regarded hands-on Kubernetes course for beginners with interactive labs and quizzes.' },
    { title: 'Play with Kubernetes', url: 'https://labs.play-with-k8s.com', description: 'Free browser-based Kubernetes environment for practising cluster operations without any local setup.' },
  ],
  'Multi-Cloud Strategy': [
    { title: 'Gartner Multi-Cloud', url: 'https://www.gartner.com/en/information-technology/topics/multicloud', description: 'Research and frameworks for planning and governing enterprise multi-cloud architectures.' },
    { title: 'Azure Arc', url: 'https://azure.microsoft.com/en-us/products/azure-arc/', description: 'Extends Azure management and governance to resources across on-premises, multi-cloud, and edge.' },
    { title: 'GCP Anthos', url: 'https://cloud.google.com/anthos', description: "Google's platform for managing applications consistently across GCP, AWS, Azure, and on-premises." },
    { title: 'AWS Outposts', url: 'https://aws.amazon.com/outposts/', description: 'Brings AWS infrastructure and services on-premises for workloads requiring low latency or local data residency.' },
    { title: 'CNCF Multi-Cloud', url: 'https://www.cncf.io/projects/', description: 'Open-source tools supporting portability and interoperability across cloud environments.' },
  ],
  'Platform Engineering': [
    { title: 'Platform Engineering Org', url: 'https://platformengineering.org', description: 'Community hub for platform engineering news, events, case studies, and best practices.' },
    { title: 'Backstage (IDP)', url: 'https://backstage.io', description: "Spotify's open-source framework for building internal developer portals that improve team autonomy." },
    { title: 'CNCF Platform White Paper', url: 'https://tag-app-delivery.cncf.io/whitepapers/platforms/', description: 'Authoritative guidance on what platforms are, what they should do, and how to build them.' },
    { title: 'Internal Developer Platforms', url: 'https://internaldeveloperplatform.org', description: 'Resource hub explaining internal developer platforms, their components, and how they reduce cognitive load.' },
    { title: 'Team Topologies', url: 'https://teamtopologies.com', description: 'The book defining platform teams and fast-flow principles, widely cited across platform engineering.' },
  ],
  'Serverless Architecture': [
    { title: 'AWS Lambda Docs', url: 'https://docs.aws.amazon.com/lambda/', description: 'Official documentation for AWS Lambda, the most widely used serverless compute service.' },
    { title: 'Azure Functions', url: 'https://learn.microsoft.com/en-us/azure/azure-functions/', description: "Microsoft's serverless compute service documentation with quickstarts and integration guides." },
    { title: 'GCP Cloud Functions', url: 'https://cloud.google.com/functions/docs', description: "Google Cloud's lightweight serverless functions documentation for event-driven application development." },
    { title: 'Serverless Framework', url: 'https://www.serverless.com/framework/docs', description: 'An open-source framework that simplifies deploying serverless applications across multiple cloud providers.' },
    { title: 'Serverless Land', url: 'https://serverlessland.com', description: "AWS's curated collection of patterns, tutorials, and sample applications for serverless architectures." },
  ],
  'Site Reliability Engineering (SRE)': [
    { title: 'Google SRE Book (free)', url: 'https://sre.google/sre-book/table-of-contents/', description: 'The definitive SRE book by Google engineers, covering SLOs, error budgets, and on-call practices.' },
    { title: 'SRE Weekly', url: 'https://sreweekly.com', description: 'Curated weekly newsletter covering incidents, tooling, and reliability engineering articles from the community.' },
    { title: 'Coursera SRE Course', url: 'https://www.coursera.org/learn/site-reliability-engineering-slos', description: 'Google-authored course focused on SLOs and how to apply them to real production services.' },
    { title: 'OpenSLO Standard', url: 'https://openslo.com', description: 'A vendor-neutral open standard for defining SLOs and SLAs in a consistent, portable format.' },
    { title: 'Incident.io Blog', url: 'https://incident.io/blog', description: 'Practical articles on incident management, on-call culture, and building more reliable systems.' },
  ],
  'AI Agents & Automation': [
    { title: 'LangChain Docs', url: 'https://python.langchain.com/docs/get_started/introduction', description: 'Documentation for LangChain, the leading framework for building LLM-powered agent applications.' },
    { title: 'CrewAI Framework', url: 'https://www.crewai.com', description: 'A framework for orchestrating multiple AI agents that collaborate to complete complex multi-step tasks.' },
    { title: 'Microsoft AutoGen', url: 'https://microsoft.github.io/autogen/', description: 'Research framework for building multi-agent conversation patterns and autonomous task completion systems.' },
    { title: 'AutoGPT', url: 'https://github.com/Significant-Gravitas/AutoGPT', description: 'Pioneering open-source autonomous AI agent project, useful for understanding agent design patterns.' },
    { title: 'Agent Protocol', url: 'https://agentprotocol.ai', description: 'An open standard for communicating with AI agents, enabling interoperability across different frameworks.' },
  ],
  'AI Ethics & Governance': [
    { title: 'EU AI Ethics Guidelines', url: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai', description: "The European Commission's framework for developing trustworthy AI systems responsibly and transparently." },
    { title: 'NIST AI RMF', url: 'https://www.nist.gov/artificial-intelligence', description: "The US government's AI Risk Management Framework for identifying and managing AI-related risks." },
    { title: 'Partnership on AI', url: 'https://partnershiponai.org', description: 'Multi-stakeholder organisation publishing research and best practices on responsible AI development and use.' },
    { title: 'AI Now Institute', url: 'https://ainowinstitute.org', description: 'Research institute producing influential reports on the social, political, and labour implications of AI.' },
    { title: 'Algorithm Watch', url: 'https://algorithmwatch.org', description: 'Independent journalism and research holding algorithmic decision-making systems accountable to the public.' },
  ],
  'AI in Cybersecurity': [
    { title: 'MITRE ATLAS', url: 'https://atlas.mitre.org', description: 'A knowledge base of adversarial tactics and techniques specifically targeting machine learning systems.' },
    { title: 'OWASP AI Security', url: 'https://owasp.org/www-project-ai-security-and-privacy-guide/', description: 'Practical guidance on securing AI and ML systems against privacy and adversarial security threats.' },
    { title: 'NCSC AI Security', url: 'https://www.ncsc.gov.uk/collection/ai-security', description: "The UK's National Cyber Security Centre guidance on securely deploying and operating AI-powered systems." },
    { title: 'Google Security Blog', url: 'https://security.googleblog.com', description: "In-depth articles from Google's security team, often covering AI-driven threat detection and response." },
    { title: 'Darktrace Research', url: 'https://darktrace.com/research', description: 'AI-focused threat intelligence research from one of the leading AI-native cybersecurity companies.' },
  ],
  'Computer Vision': [
    { title: 'OpenCV Docs', url: 'https://docs.opencv.org', description: 'Comprehensive documentation for OpenCV, the most widely used library for computer vision tasks.' },
    { title: 'Fast.ai Computer Vision', url: 'https://course.fast.ai', description: 'Practical deep learning course that covers image classification, object detection, and segmentation.' },
    { title: 'Roboflow Learn', url: 'https://roboflow.com/learn', description: 'Guides and tutorials for training, deploying, and managing computer vision models end-to-end.' },
    { title: 'Papers With Code – CV', url: 'https://paperswithcode.com/area/computer-vision', description: 'Curated CV research papers alongside open-source implementations so you can reproduce results yourself.' },
    { title: 'HuggingFace Vision Models', url: 'https://huggingface.co/models?pipeline_tag=image-classification', description: 'Thousands of pre-trained vision models you can use directly or fine-tune for your own use cases.' },
  ],
  'Data Science & Analytics': [
    { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', description: 'Free, hands-on micro-courses covering Python, pandas, SQL, and machine learning for data science.' },
    { title: 'DataCamp', url: 'https://www.datacamp.com', description: 'Interactive courses and skill tracks covering the full data science toolkit from Python to R.' },
    { title: 'Towards Data Science', url: 'https://towardsdatascience.com', description: 'Community-written articles and tutorials on practical data science techniques, tools, and case studies.' },
    { title: 'StatQuest (YouTube)', url: 'https://www.youtube.com/@statquest', description: 'Exceptionally clear explanations of statistics and machine learning concepts using visual analogies.' },
    { title: 'Mode Analytics Blog', url: 'https://mode.com/blog/', description: 'Practical analytics articles covering SQL, dashboarding, and data-driven decision making for analysts.' },
  ],
  'Fine-tuning & Model Adaptation': [
    { title: 'HuggingFace PEFT', url: 'https://huggingface.co/docs/peft/index', description: 'Documentation for parameter-efficient fine-tuning methods like LoRA, reducing compute cost significantly.' },
    { title: 'LoRA Paper', url: 'https://arxiv.org/abs/2106.09685', description: 'The original research paper introducing Low-Rank Adaptation, now the most popular fine-tuning technique.' },
    { title: 'Fast.ai Practical DL', url: 'https://course.fast.ai', description: 'Practical deep learning course covering transfer learning and model adaptation from real-world first principles.' },
    { title: 'Axolotl Fine-tuning', url: 'https://github.com/axolotl-ai-cloud/axolotl', description: 'A popular open-source tool that simplifies fine-tuning LLMs on custom datasets with minimal configuration.' },
    { title: 'Unsloth', url: 'https://github.com/unslothai/unsloth', description: 'Efficient fine-tuning library that makes training LLMs significantly faster and more memory-efficient.' },
  ],
  'Generative AI for Business': [
    { title: 'McKinsey – Gen AI', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai', description: "McKinsey's flagship annual report on the state and business value of generative AI adoption." },
    { title: 'AWS Generative AI', url: 'https://aws.amazon.com/generative-ai/', description: "AWS's hub for generative AI services, customer case studies, and getting-started resources." },
    { title: 'Microsoft Copilot Adoption', url: 'https://adoption.microsoft.com/en-us/copilot/', description: 'Practical guidance on rolling out Microsoft 365 Copilot effectively and measuring value across your organisation.' },
    { title: 'Google Vertex AI Gen', url: 'https://cloud.google.com/vertex-ai/generative-ai/docs/overview', description: "Google Cloud's generative AI platform documentation for building and deploying production AI applications." },
    { title: 'HBR – AI for Business', url: 'https://hbr.org/topic/subject/artificial-intelligence', description: "Harvard Business Review's collection of articles on AI strategy, leadership, and business transformation." },
  ],
  'Large Language Models (LLMs)': [
    { title: 'Andrej Karpathy (YouTube)', url: 'https://www.youtube.com/@AndrejKarpathy', description: 'Deep, first-principles videos on how LLMs work from scratch, trusted by practitioners and researchers worldwide.' },
    { title: 'HuggingFace NLP Course', url: 'https://huggingface.co/learn/nlp-course/chapter1/1', description: 'Free course covering transformers and LLMs with hands-on code using the HuggingFace ecosystem.' },
    { title: 'LLM Leaderboard', url: 'https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard', description: 'Live ranking of open-source LLMs by benchmark performance, useful for model selection decisions.' },
    { title: "Lilian Weng's Blog", url: 'https://lilianweng.github.io', description: 'Deeply researched posts on LLM architectures, alignment techniques, and emerging AI research trends.' },
    { title: 'The Batch – Andrew Ng', url: 'https://www.deeplearning.ai/the-batch/', description: 'Weekly AI newsletter from Andrew Ng covering the most important research and industry developments.' },
  ],
  'Machine Learning Fundamentals': [
    { title: 'Fast.ai Practical ML', url: 'https://course.fast.ai', description: 'Top-down practical approach to machine learning using modern deep learning techniques from day one.' },
    { title: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', description: "Google's free crash course covering core ML concepts with real TensorFlow and hands-on exercises." },
    { title: 'Andrew Ng – ML Spec.', url: 'https://www.coursera.org/specializations/machine-learning-introduction', description: 'The most widely taken ML course online, covering supervised, unsupervised, and reinforcement learning.' },
    { title: 'Scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', description: 'Comprehensive reference for scikit-learn, the standard Python library for classical machine learning.' },
    { title: '3Blue1Brown – Neural Nets', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi', description: 'Beautiful visual series explaining exactly how neural networks and backpropagation work mathematically.' },
  ],
  'MLOps & Model Deployment': [
    { title: 'MLflow Docs', url: 'https://mlflow.org/docs/latest/index.html', description: 'Documentation for MLflow, the most popular open-source platform for managing the ML experiment lifecycle.' },
    { title: 'Weights & Biases', url: 'https://wandb.ai/site', description: 'Experiment tracking, model monitoring, and collaboration platform used by leading ML teams globally.' },
    { title: 'Made With ML', url: 'https://madewithml.com', description: 'Comprehensive MLOps curriculum covering production ML from design and training through monitoring.' },
    { title: 'Evidently AI', url: 'https://www.evidentlyai.com', description: 'Open-source library for evaluating, testing, and monitoring ML models and data pipelines in production.' },
    { title: 'BentoML', url: 'https://www.bentoml.com', description: 'Framework for packaging ML models as production-ready APIs and managing deployments at scale.' },
  ],
  'Natural Language Processing (NLP)': [
    { title: 'HuggingFace NLP Course', url: 'https://huggingface.co/learn/nlp-course/chapter1/1', description: 'The de-facto free course for learning modern NLP using transformers and the HuggingFace library.' },
    { title: 'spaCy Docs', url: 'https://spacy.io/usage', description: 'Industrial-strength NLP library documentation, great for building production text analysis pipelines.' },
    { title: 'Stanford NLP', url: 'https://nlp.stanford.edu', description: "Stanford's NLP research group resources, including tools, datasets, and foundational course materials." },
    { title: 'NLTK Book (free)', url: 'https://www.nltk.org/book/', description: 'Classic free online book for learning NLP fundamentals with Python, ideal for building core intuition.' },
    { title: 'Papers With Code – NLP', url: 'https://paperswithcode.com/area/natural-language-processing', description: 'Browse and reproduce state-of-the-art NLP research with linked open-source code implementations.' },
  ],
  'Prompt Engineering': [
    { title: 'Anthropic Prompt Library', url: 'https://docs.anthropic.com/en/prompt-library/library', description: 'Curated, production-ready prompts from Anthropic with explanations of the techniques they demonstrate.' },
    { title: 'OpenAI Prompt Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering', description: 'Official OpenAI guidance on writing effective prompts with strategies for more reliable model outputs.' },
    { title: 'Learn Prompting (free)', url: 'https://learnprompting.org', description: 'Beginner-friendly open-source guide covering prompt techniques from basic instructions to advanced strategies.' },
    { title: 'Prompting Guide', url: 'https://www.promptingguide.ai', description: 'Comprehensive resource covering chain-of-thought, few-shot, RAG, and other advanced prompting strategies.' },
    { title: 'DAIR.AI Prompt Course', url: 'https://github.com/dair-ai/Prompt-Engineering-Guide', description: 'In-depth GitHub-based prompt engineering guide widely used by researchers and practitioners.' },
  ],
  'Responsible AI': [
    { title: 'Google Responsible AI', url: 'https://ai.google/responsibility/responsible-ai-practices/', description: "Google's practical principles and tooling for developing AI products responsibly and ethically." },
    { title: 'Microsoft Responsible AI', url: 'https://www.microsoft.com/en-us/ai/responsible-ai', description: "Microsoft's framework and tooling for building AI systems that are fair, reliable, and transparent." },
    { title: 'IBM AI Ethics', url: 'https://www.ibm.com/artificial-intelligence/ethics', description: "IBM's approach to AI ethics covering fairness, explainability, robustness, and accountability." },
    { title: 'Fast.ai Ethics Course', url: 'https://ethics.fast.ai', description: 'Practical ethics course for data scientists covering bias, fairness, and the social impact of AI systems.' },
    { title: 'Algorithmic Justice League', url: 'https://www.ajl.org', description: 'Organisation working to reduce AI bias and harm through research, art, and public advocacy.' },
  ],
  'Retrieval-Augmented Generation (RAG)': [
    { title: 'LlamaIndex Docs', url: 'https://docs.llamaindex.ai', description: 'The leading framework for connecting LLMs to external data sources to power RAG applications.' },
    { title: 'LangChain RAG Guide', url: 'https://python.langchain.com/docs/use_cases/question_answering/', description: 'Step-by-step guide to building question-answering systems over your own document collections.' },
    { title: 'Pinecone Learn', url: 'https://www.pinecone.io/learn/', description: 'Tutorials on vector databases and semantic search, the fundamental building blocks of RAG systems.' },
    { title: 'RAG Survey Paper', url: 'https://arxiv.org/abs/2312.10997', description: 'Comprehensive academic survey covering RAG architectures, retrieval techniques, and evaluation methods.' },
    { title: 'Weaviate RAG Guide', url: 'https://weaviate.io/learn/recipes/rag', description: "Practical recipes for building production RAG pipelines using Weaviate's vector database." },
  ],
  'UX / Front-End AI Tooling': [
    { title: 'Vercel v0', url: 'https://v0.dev', description: 'AI-powered UI generation tool that produces React components from natural language descriptions.' },
    { title: 'Figma AI Features', url: 'https://www.figma.com/ai/', description: "Figma's built-in AI tools for auto-layout, content generation, and design-to-code workflows." },
    { title: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI code assistant that accelerates front-end development with context-aware, in-editor code suggestions.' },
    { title: 'Framer AI', url: 'https://www.framer.com/ai', description: 'No-code website builder with AI-assisted layout and content generation for rapid prototyping.' },
    { title: 'Builder.io AI', url: 'https://www.builder.io/ai', description: 'Visual development platform using AI to convert designs and screenshots into production-ready code.' },
  ],
}

export const FALLBACK_LINKS = [
  { title: 'Coursera Technology', url: 'https://www.coursera.org/browse/information-technology', description: 'Broad catalogue of technology courses from top universities, covering cloud, AI, and software engineering.' },
  { title: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/', description: 'Professionally focused video courses on tech, business, and creative skills with certificate paths.' },
  { title: 'Pluralsight', url: 'https://www.pluralsight.com', description: 'Technology-focused skill platform with structured learning paths and assessments for cloud, DevOps, and AI.' },
  { title: "O'Reilly Learning", url: 'https://www.oreilly.com', description: "Comprehensive access to O'Reilly books, videos, and live online events across all technology domains." },
  { title: 'edX Technology', url: 'https://www.edx.org/learn/technology', description: 'University-level technology courses and professional certificates from leading global institutions.' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function getColour(topic, allTopics) {
  const i = allTopics.indexOf(topic)
  return i >= 0 ? PALETTE[i % PALETTE.length] : '#9ca3af'
}

export function getLinks(topic, offset) {
  const pool = LINKS[topic] || FALLBACK_LINKS
  return [0, 1, 2].map(i => pool[(offset * 3 + i) % pool.length])
}

export function isValidName(name) {
  return /^[A-Za-z]+(?: [A-Za-z])?$/.test(name.trim())
}

export function avatarColour(name) {
  let h = 0
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h)
  return PALETTE[Math.abs(h) % PALETTE.length]
}

export function initials(name) {
  const p = name.trim().split(' ')
  return p.length >= 2 ? (p[0][0] + p[p.length - 1][0]).toUpperCase() : name.slice(0, 2).toUpperCase()
}

export function pairingType(members) {
  const lvls = members.map(m => m.level)
  return lvls.every(l => l === lvls[0]) ? 'Peer pairing' : 'Mentor / Mentee'
}

// ─── Default data ─────────────────────────────────────────────────────────────
// groups with 1 member = "looking to pair", 2+ members = active pairing
export const DEFAULT_DATA = {
  cloudTopics: [...CLOUD_TOPICS],
  aiTopics: [...AI_TOPICS],
  groups: [
    {
      id: 1,
      topic: 'UX / Front-End AI Tooling',
      members: [
        { name: 'Ed L', level: 'Intermediate' },
        { name: 'James R', level: 'Intermediate' },
      ],
      createdAt: 1,
    },
    {
      id: 2,
      topic: 'AWS',
      members: [
        { name: 'Sarah K', level: 'Beginner' },
      ],
      createdAt: 2,
    },
  ],
}

// ─── Shared styles ────────────────────────────────────────────────────────────
export const inputStyle = {
  width: '100%', padding: '10px 12px', border: '1.5px solid #e5e7eb',
  borderRadius: 8, fontSize: 14, color: '#111827', outline: 'none',
  background: '#fff',
}

export const btnPrimary = {
  background: '#fc4c02', color: '#fff', border: 'none', borderRadius: 8,
  fontWeight: 700, fontSize: 13, padding: '8px 16px', cursor: 'pointer',
  textTransform: 'uppercase', letterSpacing: 0.4,
}

export const btnSecondary = {
  background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: 8,
  fontWeight: 600, fontSize: 13, padding: '8px 16px', cursor: 'pointer',
}
