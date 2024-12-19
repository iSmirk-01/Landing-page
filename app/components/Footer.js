const Footer = ({ footer }) => {
    return (
      <div className="flex flex-col p-4 bg-DarkThemeMainBlue items-center">
        <footer>{footer}</footer>
        <p>© 2025 Our Services. All rights reserved.</p>
      </div>
    );
}

export default Footer