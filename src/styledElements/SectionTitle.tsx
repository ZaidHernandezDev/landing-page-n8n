interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </>
  );
};

export default SectionTitle;
