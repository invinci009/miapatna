import Link from 'next/link';
import { courses } from '@/data/courses';
import { schoolInfo, instituteOverview, testimonials, placementStats } from '@/data/leadership';
import { quickLinks } from '@/data/quickLinks';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-700 to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
              🎓 Admissions Open 2024-25
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {schoolInfo.tagline}
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Quality healthcare education at {schoolInfo.name}. {placementStats.placementRate} students trained with globally recognized certificates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/academics"
                className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Explore Courses
              </Link>
              <Link
                href="/admissions"
                className="w-full sm:w-auto bg-secondary text-neutral px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24+</div>
              <div className="text-subtle-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">2000+</div>
              <div className="text-subtle-light">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">6+</div>
              <div className="text-subtle-light">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-subtle-light">Placement Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral mb-4">
              Our Courses
            </h2>
            <p className="text-subtle-light max-w-2xl mx-auto">
              Industry-relevant healthcare programs designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course, index) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-t-4 ${index % 3 === 0 ? 'border-primary' :
                    index % 3 === 1 ? 'border-secondary' : 'border-accent'
                  }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                      {course.shortName}
                    </span>
                    <span className="text-sm text-secondary font-semibold">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral mb-2">{course.name}</h3>
                  <p className="text-subtle-light text-sm mb-4">{course.description}</p>
                  <div className="text-primary font-semibold text-sm">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral mb-6">
                About {schoolInfo.shortName}
              </h2>
              <p className="text-subtle-light leading-relaxed mb-6">
                {instituteOverview.description}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">✓</span>
                  </div>
                  <span className="text-neutral font-medium">Globally Recognized Certificates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-secondary">✓</span>
                  </div>
                  <span className="text-neutral font-medium">Experienced Faculty</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent">✓</span>
                  </div>
                  <span className="text-neutral font-medium">Modern Facilities</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all text-center"
                  >
                    <div className="text-2xl mb-2">
                      {link.icon === 'info' && '📚'}
                      {link.icon === 'courses' && '🎓'}
                      {link.icon === 'apply' && '📝'}
                      {link.icon === 'facilities' && '🏥'}
                    </div>
                    <div className="font-semibold text-neutral text-sm">{link.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-focus">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Start Your Healthcare Career Today
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of successful healthcare professionals who started their journey with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Apply Now
            </Link>
            <a
              href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`}
              className="w-full sm:w-auto bg-secondary text-neutral px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Call: {schoolInfo.contact.phone[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
