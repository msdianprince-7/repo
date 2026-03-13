import { Download, FileText } from 'lucide-react';

export function ResumeDownload() {
  const handleDownload = () => {
    const resumeContent = `
PRIYANSH NANDWANA
Software Engineer

CONTACT
Email: nandwana.priyansh103@gmail.com
Phone: +91-8233111378
GitHub: github.com/msdianprince-7
LinkedIn: linkedin.com/in/priyansh-nandwana

SKILLS
Languages: Java (Core Java 8+), JavaScript, TypeScript, Python, C++
Backend Technologies: Spring Boot, Spring MVC, Data JPA (Hibernate), Node.js, Express.js, NestJS, REST APIs, Microservices
Databases: PostgreSQL, MySQL, MongoDB, Redis, DynamoDB
Cloud & Infrastructure: AWS (EC2, Lambda, S3, SQS, RDS, CloudWatch, Autoscaling)
Build & DevOps: Maven, Git, GitHub Actions, Docker, CI/CD
Testing & Others: JUnit, Mockito, Jest, Postman

EXPERIENCE
Software Engineer | AGSuite Technologies (Jan 2025 – Present)
- Architected AWS middleware integrating NetSuite with Zoho Books, processing 10,000+ PDFs daily using EC2 Auto Scaling, SQS, Lambda, S3, and RDS PostgreSQL, achieving 99.9% uptime and 75% faster processing.
- Deployed infrastructure with CloudFormation and CloudWatch monitoring, implementing S3 lifecycle policies reducing storage costs by 60% while maintaining audit compliance.
- Implemented Application Load Balancer and Lambda event processing for zero-downtime deployments.

Associate Software Engineer | AGSuite Technologies (Oct 2024 – Jan 2025)
- Integrated Large Language Model capabilities using OpenAI API with prompt engineering and response streaming to automate document analysis and data extraction for 1,000+ financial records daily, reducing manual data entry by 70%.
- Built LLM middleware service with Node.js and Express.js implementing rate limiting, error handling, and retry logic for robust API integration.
- Developed RESTful API endpoints using RESTlet and Suitelet scripts in NetSuite to process LLM responses and integrate with backend workflows.
- Implemented token optimization strategies and response caching mechanisms, reducing API costs by 40% while maintaining processing accuracy.

PROJECTS
IPO Analyzer - Real-Time IPO Platform
- Built a multi-source scraping pipeline with Puppeteer + Cheerio aggregating IPO data from 10+ sources, enabling parallel scraping and achieving 60% faster data refresh with 95% accuracy.
- Developed a financial scoring engine analyzing 15+ metrics (P/E, ROE, D/E, CAGR) and integrated multi-provider AI analysis (OpenAI/Gemini) with 99.2% uptime and <3s response time.
- Built real-time frontend with React + Drizzle ORM over PostgreSQL processing 50-100 IPOs/day with <2s API latency.

LSM Database Engine - Storage Internals
- Built a full LSM Tree storage engine with MemTable (Skip List), multi-level SSTables, Bloom filters, and Write-Ahead Log, achieving 42,000 writes/sec, P99 <2.3ms, and 97.2% test coverage.
- Optimized read path with Bloom filters (92% hit rate) and Protocol Buffers achieving 47% compression and 5× encoding speed over JSON.
- Designed background size-tiered compaction reducing read amplification by 50% and achieving 2.14× write amplification.

TaskMaster - Distributed Task Orchestration
- Architected a 3-service distributed scheduler using gRPC inter-service communication, enabling horizontal scaling to 50 workers and achieving 25 tasks/sec throughput with <10ms dispatch latency.
- Implemented round-robin load balancing and heartbeat-based fault tolerance with PostgreSQL SKIP LOCKED for contention-free polling, ensuring 100% task completion during worker failures.
- Built a real-time monitoring dashboard with React + Server-Sent Events delivering task lifecycle updates in <1s.

EDUCATION
Bachelor of Engineering in Electronics and Communication Engineering
Bangalore Institute of Technology (2024)
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Priyansh_Nandwana_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 bg-[#007acc] hover:bg-[#0066b8] text-white rounded transition-colors text-sm"
      data-testid="button-download-resume"
    >
      <Download size={16} />
      <span>Download Resume</span>
    </button>
  );
}

export function ResumeCard() {
  return (
    <div className="bg-[#282c34] rounded-lg p-4 border border-[#3e4451] hover:border-[#007acc] transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-[#3e4451] rounded">
          <FileText size={24} className="text-[#61afef]" />
        </div>
        <div>
          <h3 className="font-semibold text-[#d4d4d4]">Resume</h3>
          <p className="text-xs text-[#858585]">PDF / TXT Format</p>
        </div>
      </div>
      <ResumeDownload />
    </div>
  );
}