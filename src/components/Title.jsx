const Title = ({ level = "h2", children, subtitle, theme = "light" }) => {
  const Tag = level;
  const isDark = theme === "dark";

  return (
    <div className="text-center p-10">
      <Tag
        className={`text-3xl font-bold ${
          isDark ? "text-[var(--color-light)]" : "text-[var(--color-dark)]"
        }`}
      >
        {children}
      </Tag>
      {subtitle && (
        <p
          className={`text-xl mt-2 ${isDark ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
