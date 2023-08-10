import CardComponent from "../../components/CardComponent";

export default function NotestContainer() {
  return (
    <div>
      <h1 className="mb-12 text-5xl font-semibold">
        Notes
      </h1>

      <div className="grid grid-cols-5 gap-6 place-items-stretch">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>

    </div>
  )
}