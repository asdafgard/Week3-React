function Image({ source, width, name, role }) {
  const match = name.match(/^(.*?)\s*(\([^()]+\))$/);
  const fullName = match ? match[1] : name;
  const nickname = match ? match[2] : null;

  return (
    <div className="character-card">
      <img
        src={source}
        width={width}
        alt={name}
        className="character-image"
      />

      <h2>{fullName}</h2>

      {nickname && <h3 className="character-nickname">{nickname}</h3>}

      <p>{role}</p>
    </div>
  );
}

export default Image;