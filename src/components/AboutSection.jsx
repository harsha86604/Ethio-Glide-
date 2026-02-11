import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold">
                        Machine Learning Engineer | AI Engineer
                    </h3>
                    <p className="text-muted-foreground">
                        I specialize in building, training, and deploying intelligent systems using 
                        modern machine learning and artificial intelligence technologies. My focus 
                        is on creating solutions that are production-ready, scalable, and impactful..
                    </p>

                    <p className="text-muted-foreground">
                        With hands-on experience in model development, cloud deployment, and MLOps, 
                        I enjoy transforming data into reliable, real-world AI applications that drive results.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in touch
                        </a>

                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-200">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Model Development</h4>
                                <p className="text-muted-foreground">
                                    Designing and training machine learning models with Python, TensorFlow, 
                                    PyTorch, and Scikit-learn to build reliable AI solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Data & Feature Engineering</h4>
                                <p className="text-muted-foreground">
                                    Cleaning, transforming, and optimizing data pipelines to improve model 
                                    accuracy and efficiency across diverse AI applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Deployment & MLOps</h4>
                                <p className="text-muted-foreground">
                                    Deploying AI models to production with cloud platforms, APIs, and 
                                    automated pipelines to ensure scalability and performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}