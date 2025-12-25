export default async function serviceList() {
    const res = await fetch("http://localhost:3000/api/services");
    const services = await res.json();

    return (
        <div>
            {services.map((p) => (
                <p key={p.id}>{p.name}</p>
            ))}
        </div>
    )
}