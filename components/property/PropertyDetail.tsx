export default function PropertyDetail({ property }: { property: any }) {
  if (!property) return null;

  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>

      <div>
        <strong>Price:</strong> {property.price}
      </div>

      <div>
        <strong>Location:</strong> {property.location}
      </div>

      <div>
        <img
          src={property.image}
          alt={property.title}
          style={{ width: "400px", height: "auto" }}
        />
      </div>
    </div>
  );
}
