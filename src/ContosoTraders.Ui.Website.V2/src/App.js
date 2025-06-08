import AboutUs from "./AboutUs";
import "./App.css";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  return (
    <>
      <WelcomePopup />
      <header className="App-header">
        <div className="container">
          <h1 className="text-center mt-5 pb-4">
            DevOps/DevSecOps Challenge - Day 2 Hackathon
          </h1>
          <p>
            Welcome to the DevSecOps Mastery with GitHub Hackathon! This event
            is your gateway to mastering DevSecOps practices within a modern
            application environment. We have crafted this hackathon to provide
            you with a robust learning experience, focused on Contoso Traders, a
            hypothetical e-commerce company using a React front-end, .NET
            back-end, and various microservices, container services, AI-powered
            GitHub Actions, undersatnding of Security compliance as code and
            mastering the usage of GitHub Copilot.
          </p>

          <p>
            Your goal is to integrate DevSecOps practices into Contoso Traders'
            existing e-commerce application. As you navigate through various
            challenges, you will gain practical experience in implementing
            DevSecOps in an application built with a modern tech stack.
          </p>
        </div>
        <div className="container">
          <h3>Learning Objectives</h3>
          <p>Participating in this hackathon, you will:</p>
          <ul>
            <li>
              Master the art of Continuous Integration and Deployment (CI/CD)
              for .NET applications using GitHub Actions.
            </li>
            <li>Enhance code security and manage dependencies effectively.</li>
            <li>
              Integrate and optimize monitoring solutions using Azure Monitor
              and Application Insights.
            </li>
            <li>
              Execute resilience testing to ensure the robustness of the
              application.
            </li>
            <li>
              Intergrate the usage of AI-powered GitHub actions to have a good
              hold on the security checks and complaince of pipelines.
            </li>
            <li>
              Master the usage of GitHub Copilot to leverage the power of AI
              towards code completion and testing.
            </li>
          </ul>
        </div>
        <div className="container">
          <h3>Hackathon Format: Challenge Based</h3>
          <p>
            This hackathon adopts a challenge-based format, offering you a
            unique opportunity to learn while dealing with practical problems.
            Each challenge includes one or more self-contained tasks, designed
            to test and enhance your skills in specific aspects of DevSecOps.
            You will approach these challenges by:
          </p>
          <ul>
            <li>Analyzing the problem statement.</li>
            <li>
              Strategizing your approach to find the most effective solution.
            </li>
            <li>
              Leveraging the provided lab environment and GitHub technologies.
            </li>
            <li>
              Collaborating with peers to refine and implement your solutions.
            </li>
          </ul>
        </div>
        <div className="container">
          <h3>Challenges</h3>
          <ol>
            <li>
              <p>
                <strong>
                  Challenge 01: Continuous Integration and Deployment for
                  Contoso Traders using GitHub Actions
                </strong>
              </p>
              <ul>
                <li>
                  Create a GitHub repository for the ecommerce application.
                </li>
                <li>Set up a CI/CD workflow using GitHub Actions.</li>
                <li>
                  Add new features and test automated deployments with GitHub
                  Actions.{" "}
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                  Challenge 02: GitHub Advanced Security - Implement Code
                  Security Enhancements
                </strong>
              </p>
              <ul>
                <li>
                  Activate and utilize code scanning tools for vulnerability
                  identification.
                </li>
                <li>Implement CodeQL alerts and handle security advisories.</li>
                <li>Mitigate security risks identified in dependencies.</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                  Challenge 03: GitHub Advanced Security - Dependency Management
                  and Secret Scanning
                </strong>
                :
              </p>
              <ul>
                <li>Analyze and manage dependencies for security risks.</li>
                <li>Implement Dependabot for automated package updates.</li>
                <li>Use secret scanning to secure sensitive information.</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                  Challenge 04: Implementing Monitoring Solutions for Contoso
                  Traders
                </strong>
              </p>
              <ul>
                <li>Integrate Azure Monitor and Application Insights.</li>
                <li>
                  Configure key performance metrics and alerting mechanisms.
                </li>
                <li>Design dashboards for monitoring application health.</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                  Challenge 05: Resilience Testing using Azure Load Testing
                  &amp; Azure Chaos Studio
                </strong>
              </p>
              <ul>
                <li>
                  Conduct Azure Load Testing for high-scale traffic simulation.
                </li>
                <li>Configure and run experiments in Azure Chaos Studio.</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                  Challenge 06: DevSecOps with AI-Powered GitHub Actions
                </strong>
              </p>
              <ul>
                <li>Configure and implement AI Code Review GitHub Action.</li>
                <li>
                  Configure and implement AI Security Check for Pull Requests.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                  Challenge 07: Enhancing Contoso Traders with GitHub Copilot
                </strong>
              </p>
              <ul>
                <li>Feature Addition with GitHub Copilot.</li>
                <li>Unit Test Generation with Copilot.</li>
                <li>Code Review and Security Check.</li>
                <li>CI/CD Pipeline Setup and Deployment.</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Challenge 08: ecurity Compliance as Code</strong>
              </p>
              <ul>
                <li>Azure Policy Implementation.</li>
                <li>GitHub CI/CD Integration.</li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                  Challenge 09: Securing DevOps with Microsoft Defender for
                  Cloud
                </strong>
              </p>
              <ul>
                <li>Configure Microsoft Security DevOps GitHub Action.</li>
                <li>View Scanned Results.</li>
                <li>
                  Connect GitHub Environment to Microsoft Defender for Cloud.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="container">
          <p>Each challenge comes with its own set of tasks and objectives.</p>
          <p>
            Feel free to explore the challenges, learn, and have fun during this
            hackathon! If you have any questions, don't hesitate to reach out to
            your coach.
          </p>
          <p>Happy hacking!</p>
        </div>
      </header>
      <AboutUs />
    </>
  );
}

export default App;
