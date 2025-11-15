interface Property {
  id: string | number;
  image: string;
  title: string;
  location: string;
  price: number;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-xl font-semibold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-bold mt-1">R {property.price}/night</p>

      <a
        href={`/properties/${property.id}`}
        className="mt-3 inline-block text-blue-500 underline"
      >
        View Details
      </a>
    </div>
  );
}
