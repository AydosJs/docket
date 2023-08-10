type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { placeholder?: string; className?: string, label?: string };

export default function TextField({ label, ...props }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="default" className="font-medium select-none">{label}</label>
      <input
        {...props}
        placeholder={props.placeholder}
        className={`px-4 py-2 border border-gray-300 rounded-lg outline-none ${props.className}`}
      />
    </div>
  )
}