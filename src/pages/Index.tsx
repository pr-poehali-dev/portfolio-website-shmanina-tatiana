import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground tracking-tight">
              TATIANA SHMANINA
            </h1>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#research" className="hover:text-primary transition-colors">Research</a>
              <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
              <a href="#awards" className="hover:text-primary transition-colors">Awards</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-6 border-b">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Chemistry Researcher • Community Founder • Scholar
              </p>
              <h2 className="text-4xl font-bold mb-6 leading-tight text-foreground">
                Tatiana Shmanina
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-8">
                Dedicated chemistry researcher combining rigorous scientific inquiry with community 
                leadership and environmental advocacy. Focused on interdisciplinary approaches 
                connecting chemistry, ecology, and social innovation.
              </p>
              
              <div className="space-y-3 mb-8 text-foreground/90">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span className="font-medium">Chemistry Researcher</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span className="font-medium">Founder, Riser Community</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span className="font-medium">Founder, Delve Online School</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span className="font-medium">Environmental Volunteer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span className="font-medium">Award Winner, National Scientific Competitions</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/98643785-b0fa-4000-982b-38cac21e35a6/files/f56e2dbd-9f87-435b-86ff-354ed4816208.jpg"
                alt="Tatiana Shmanina"
                className="w-full shadow-lg border"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2">Research</h3>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 border-l-2 border-l-primary">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                    <Icon name="Flask" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Chemistry Research</h4>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Conducting advanced research in chemistry with emphasis on sustainable solutions 
                    and environmental applications. Research interests include green chemistry principles, 
                    molecular analysis, and the intersection of chemical processes with ecological systems.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Areas of Focus: Sustainable Chemistry • Environmental Impact • Applied Research
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-2 border-l-primary">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                    <Icon name="FileText" className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Scientific Contributions</h4>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Active participant in scientific conferences at national and republic levels. 
                    Presentations and publications focus on innovative chemical research methodologies 
                    and their practical applications in environmental contexts.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Conference Presentations • Research Publications • Academic Collaboration
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2">Leadership & Education</h3>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-3">Riser Community</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Founder & Director
                </p>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6">
                International community platform empowering young leaders in science, technology, 
                and social innovation. Fostering collaborative networks for cross-cultural exchange 
                and project development.
              </p>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>International network development</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Youth leadership programs</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Cross-cultural collaboration initiatives</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-primary" size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-3">Delve Online School</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Founder & Lead Educator
                </p>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Educational platform providing accessible, high-quality STEM education to students 
                worldwide. Curriculum design focused on scientific inquiry, critical thinking, 
                and practical application.
              </p>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>STEM curriculum development</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Student mentorship programs</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Accessible online education</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2">Environmental Advocacy</h3>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <Card className="p-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                  <Icon name="Leaf" className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Ecological Volunteer Work</h4>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Active volunteer in environmental conservation initiatives, combining scientific 
                  knowledge with practical action. Engaged in sustainability programs, conservation 
                  projects, and environmental education advocacy.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Conservation</p>
                    <p className="text-muted-foreground">Environmental protection initiatives</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Sustainability</p>
                    <p className="text-muted-foreground">Waste reduction programs</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Education</p>
                    <p className="text-muted-foreground">Environmental awareness campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="awards" className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2">Awards & Recognition</h3>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="space-y-6">
            <Card className="p-8 border-l-2 border-l-primary">
              <div className="flex items-start gap-6">
                <Icon name="Award" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-2">National Scientific Competitions</h4>
                  <p className="text-foreground/70 mb-2">
                    Winner and prizewinner in multiple national-level chemistry and science competitions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Recognition for excellence in research methodology, experimental design, and scientific innovation
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-2 border-l-primary">
              <div className="flex items-start gap-6">
                <Icon name="Trophy" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-2">Scientific Conference Awards</h4>
                  <p className="text-foreground/70 mb-2">
                    Recognition at republic and national scientific conferences
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Awards for outstanding research presentations and contributions to scientific discourse
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-2 border-l-primary">
              <div className="flex items-start gap-6">
                <Icon name="Star" className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h4 className="text-xl font-bold mb-2">Leadership & Community Impact</h4>
                  <p className="text-foreground/70 mb-2">
                    Acknowledged for social entrepreneurship and educational innovation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Recognition for founding and leading Riser Community and Delve Online School
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Contact</h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              For research collaboration, speaking engagements, or educational partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Mail" className="mr-2" size={20} />
                Email
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Linkedin" className="mr-2" size={20} />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="FileText" className="mr-2" size={20} />
                Curriculum Vitae
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Tatiana Shmanina. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
