import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-sm font-medium tracking-wider">TATIANA SHMANINA</h1>
          <div className="flex gap-8 text-sm">
            <a href="#research" className="hover:opacity-60 transition-opacity">Research</a>
            <a href="#leadership" className="hover:opacity-60 transition-opacity">Leadership</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-start">
            <div>
              <h2 className="text-5xl font-light mb-8 leading-tight tracking-tight">
                Chemistry,<br />ecology,<br />social innovation
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                <p>Chemistry researcher</p>
                <p>Founder of Riser Community</p>
                <p>Founder of Delve online school</p>
                <p>Environmental volunteer</p>
                <p>National science competition winner</p>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/98643785-b0fa-4000-982b-38cac21e35a6/files/f56e2dbd-9f87-435b-86ff-354ed4816208.jpg"
                alt="Tatiana Shmanina"
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed text-foreground/70">
            I am a chemistry researcher driven by the belief that science creates meaningful change. 
            My work combines rigorous scientific inquiry with community building and environmental stewardship, 
            inspiring the next generation of scientists and leaders.
          </p>
        </div>
      </section>

      <section id="research" className="py-24 px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-medium tracking-wider mb-16">RESEARCH</h3>
          
          <div className="space-y-16">
            <div>
              <h4 className="text-2xl font-light mb-4">Chemistry Research</h4>
              <p className="text-lg leading-relaxed text-foreground/70">
                Advanced research in chemistry with emphasis on sustainable solutions and environmental 
                applications. Focus areas include green chemistry principles, molecular analysis, 
                and the intersection of chemical processes with ecological systems.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-light mb-4">Scientific Contributions</h4>
              <p className="text-lg leading-relaxed text-foreground/70">
                Active participant in scientific conferences at national and republic levels. 
                Presentations and publications focus on innovative research methodologies and 
                practical applications in environmental contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-24 px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-medium tracking-wider mb-16">LEADERSHIP</h3>

          <div className="space-y-16">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-light">Riser Community</h4>
                <span className="text-sm text-muted-foreground">Founder</span>
              </div>
              <p className="text-lg leading-relaxed text-foreground/70 mb-6">
                International community platform empowering young leaders in science, technology, 
                and social innovation. Building collaborative networks for cross-cultural exchange 
                and transformative project development.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-light">Delve Online School</h4>
                <span className="text-sm text-muted-foreground">Founder</span>
              </div>
              <p className="text-lg leading-relaxed text-foreground/70 mb-6">
                Educational platform providing accessible, high-quality STEM education worldwide. 
                Curriculum designed to foster scientific inquiry, critical thinking, and practical application 
                through personalized mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-medium tracking-wider mb-16">ENVIRONMENTAL WORK</h3>
          
          <div>
            <h4 className="text-2xl font-light mb-4">Ecological Volunteer</h4>
            <p className="text-lg leading-relaxed text-foreground/70">
              Active engagement in environmental conservation initiatives, combining scientific 
              knowledge with practical action. Focus on sustainability programs, conservation projects, 
              and environmental education advocacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-medium tracking-wider mb-16">RECOGNITION</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-light mb-2">National Scientific Competitions</h4>
              <p className="text-foreground/60">
                Winner and prizewinner in multiple national-level chemistry and science competitions
              </p>
            </div>

            <div>
              <h4 className="text-xl font-light mb-2">Scientific Conferences</h4>
              <p className="text-foreground/60">
                Recognition at republic and national conferences for outstanding research presentations
              </p>
            </div>

            <div>
              <h4 className="text-xl font-light mb-2">Social Innovation</h4>
              <p className="text-foreground/60">
                Acknowledged for educational innovation and community leadership initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-medium tracking-wider mb-16">CONTACT</h3>
          <p className="text-xl leading-relaxed text-foreground/70 mb-12">
            Available for research collaboration, speaking engagements, and educational partnerships.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="rounded-none">
              Email
            </Button>
            <Button variant="outline" size="lg" className="rounded-none">
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="rounded-none">
              CV
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2024 TATIANA SHMANINA
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
