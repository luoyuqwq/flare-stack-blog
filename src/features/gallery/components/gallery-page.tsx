import "./gallery-page.css";

// ============================================================
// 图片墙数据：把你自己的图片 URL 和说明填在这里。
// 上传图片到后台「媒体库」后，复制图片链接替换下面的 src 即可。
// ============================================================
const GALLERY_IMAGES = [
  { src: "https://picsum.photos/seed/rikka1/900/600", alt: "示例图片 1" },
  { src: "https://picsum.photos/seed/rikka2/900/600", alt: "示例图片 2" },
  { src: "https://picsum.photos/seed/rikka3/900/600", alt: "示例图片 3" },
  { src: "https://picsum.photos/seed/rikka4/900/600", alt: "示例图片 4" },
  { src: "https://picsum.photos/seed/rikka5/900/600", alt: "示例图片 5" },
  { src: "https://picsum.photos/seed/rikka6/900/600", alt: "示例图片 6" },
];

export function GalleryPage() {
  return (
    <section className="gallery-page fuwari-card-base">
      <header className="gallery-heading">
        <h1>图片墙</h1>
        <p>记录我喜欢的瞬间。</p>
      </header>
      <div className="gallery-grid">
        {GALLERY_IMAGES.map((img, index) => (
          <figure key={index} className="gallery-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
