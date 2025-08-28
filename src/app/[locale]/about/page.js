export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            About CityScape Oasis
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A visionary destination where cultures converge, traditions flourish, and unforgettable experiences await every visitor.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  CityScape Oasis was born from a simple yet powerful vision: to create a space where people from all walks of life could experience the richness of global cultures without leaving their city.
                </p>
                <p>
                  What started as an ambitious dream has evolved into a vibrant, living destination that celebrates diversity, fosters understanding, and creates lasting memories for millions of visitors each year.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
                alt="CityScape Oasis development journey"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
