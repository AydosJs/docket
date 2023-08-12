type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  className?: React.ReactNode;
}

export default function Button({ children, className = '', ...rest }: Props) {
  return (
    <button
      className={`w-full p-2 py-2.5  text-base text-center text-white rounded-lg font-medium ${className}`}
      {...rest}>
      {children}
    </button>
  )
}