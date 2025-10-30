import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tatiana Shmanina
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
            <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
            <a href="#volunteering" className="hover:text-primary transition-colors">Volunteering</a>
            <a href="#awards" className="hover:text-primary transition-colors">Awards</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Do you believe in a combination of{" "}
                <span className="text-primary">chemistry</span>,{" "}
                <span className="text-secondary">ecology</span>, and{" "}
                <span className="text-accent">social initiatives</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                This is who I am:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="Flask" className="text-primary mt-1" size={20} />
                  <span>Chemistry researcher</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Users" className="text-primary mt-1" size={20} />
                  <span>Founder of Riser Community</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="GraduationCap" className="text-primary mt-1" size={20} />
                  <span>Founder of Delve online school</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Leaf" className="text-secondary mt-1" size={20} />
                  <span>Ecological volunteer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Award" className="text-accent mt-1" size={20} />
                  <span>Winner/prizewinner of national/republic contests and scientific conferences</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Mail" className="mr-2" size={20} />
                Get in Touch
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/98643785-b0fa-4000-982b-38cac21e35a6/files/f56e2dbd-9f87-435b-86ff-354ed4816208.jpg"
                alt="Tatiana Shmanina"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
          <Card className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate chemistry researcher driven by the belief that science can create meaningful change. 
              My journey combines rigorous scientific inquiry with a commitment to community building and environmental stewardship. 
              Through my work in research, education, and social initiatives, I strive to inspire the next generation 
              of scientists and leaders who will tackle our world's most pressing challenges.
            </p>
          </Card>
        </div>
      </section>

      <section id="research" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Research</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <Icon name="Microscope" className="text-primary mb-4" size={32} />
              <h4 className="text-2xl font-semibold mb-3">Chemistry Research</h4>
              <p className="text-muted-foreground">
                Conducting innovative research in chemistry with focus on sustainable solutions 
                and practical applications. My work explores the intersection of chemical processes 
                and environmental impact.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <Icon name="FileText" className="text-secondary mb-4" size={32} />
              <h4 className="text-2xl font-semibold mb-3">Scientific Publications</h4>
              <p className="text-muted-foreground">
                Contributed to multiple scientific conferences and journals, sharing findings 
                that advance our understanding of chemical processes and their real-world applications.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Leadership</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <h4 className="text-2xl font-semibold mb-4">Riser Community</h4>
              <p className="text-muted-foreground mb-4">
                Founded and lead a vibrant community dedicated to empowering young people 
                to pursue their passions in science, technology, and social innovation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5" size={16} />
                  <span>Building international network of changemakers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5" size={16} />
                  <span>Organizing collaborative projects and initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-primary mt-0.5" size={16} />
                  <span>Fostering cross-cultural dialogue and cooperation</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="GraduationCap" className="text-secondary" size={32} />
              </div>
              <h4 className="text-2xl font-semibold mb-4">Delve Online School</h4>
              <p className="text-muted-foreground mb-4">
                Established an innovative online educational platform that makes quality 
                education accessible to students worldwide, with focus on STEM subjects.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-secondary mt-0.5" size={16} />
                  <span>Curriculum development and teaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-secondary mt-0.5" size={16} />
                  <span>Mentoring students in scientific inquiry</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" className="text-secondary mt-0.5" size={16} />
                  <span>Creating inclusive learning environment</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="volunteering" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Volunteering</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" className="text-secondary" size={36} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Environmental Conservation</h4>
              <p className="text-sm text-muted-foreground">
                Active participation in ecological initiatives and conservation projects
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Recycle" className="text-secondary" size={36} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Sustainability Programs</h4>
              <p className="text-sm text-muted-foreground">
                Leading waste reduction and recycling initiatives in local communities
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TreePine" className="text-secondary" size={36} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Green Advocacy</h4>
              <p className="text-sm text-muted-foreground">
                Raising awareness about environmental issues through education and action
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="awards" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Awards & Recognition</h3>
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <Icon name="Trophy" className="text-accent mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">National Scientific Competitions</h4>
                  <p className="text-muted-foreground">
                    Winner and prizewinner in multiple national-level chemistry and science competitions, 
                    demonstrating excellence in research and innovation.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Icon name="Award" className="text-primary mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Scientific Conference Recognition</h4>
                  <p className="text-muted-foreground">
                    Recognized at republic and national scientific conferences for outstanding 
                    research presentations and contributions to the field.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <Icon name="Star" className="text-secondary mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Leadership Recognition</h4>
                  <p className="text-muted-foreground">
                    Acknowledged for social entrepreneurship and community leadership through 
                    Riser Community and Delve online school initiatives.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6">Let's Connect</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in collaboration or want to learn more about my work?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Mail" className="mr-2" size={20} />
                Email Me
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Linkedin" className="mr-2" size={20} />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="FileText" className="mr-2" size={20} />
                View CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Tatiana Shmanina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
