function Lyric() {
  const lyric = 'adfasdf%0Aads%0Afasd%0Af%0Asdf%0Aasd%0Af%0Aasfd%0A%0Asdf%0Aasdfasdf%0Aadsfasdf%0A%0Aadsfasd';
  return (
    <div className="lyric-container">
      <div className="subtitle">
        <p>Sparkle</p>
      </div>
      <div className="lyric">
        <p>
          {decodeURI(lyric)}
        </p>
      </div>
    </div>
  )
}

export default Lyric;