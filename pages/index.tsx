import Card from '@/components/common/Card'
import { SAMPLE_PROPERTIES } from '@/constants'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">ALX Listing App</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PROPERTIES.map((property) => (
          <Card
            key={property.id}
            title={property.title}
            description={property.description}
            image={property.image}
          />
        ))}
      </div>
    </main>
  )
}
