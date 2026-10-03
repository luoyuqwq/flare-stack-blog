import "./download-page.css";

// ============================================================
// 资源下载页数据：把真实下载地址和校验值填在这里。
// 上传文件到后台「媒体库」（R2）后，复制文件的公开直链填到 url。
// SHA-256 校验值：Windows 用 `certutil -hashfile 文件名 SHA256` 计算。
// ============================================================

const FEATURED_DOWNLOAD = {
  name: "Rikka 整合包",
  version: "1.21",
  size: "1.8 GB",
  url: "#", // ← 替换成 R2 直链
  sha256: "上传后填 SHA-256", // ← 替换成校验值
};

const OTHER_DOWNLOADS = [
  {
    name: "Java 运行环境 (JRE 21)",
    size: "约 200 MB",
    url: "#", // ← 替换成 R2 直链
  },
  {
    name: "光影包合集（可选）",
    size: "约 90 MB",
    url: "#", // ← 替换成 R2 直链
  },
];

export function DownloadPage() {
  return (
    <section className="download-page fuwari-card-base">
      <header className="download-heading">
        <h1>资源下载</h1>
        <p>Minecraft 客户端与常用资源，开箱即玩。</p>
      </header>

      <div className="download-featured">
        <div className="download-featured-info">
          <span className="download-version-tag">
            Minecraft {FEATURED_DOWNLOAD.version}
          </span>
          <h2>{FEATURED_DOWNLOAD.name}</h2>
          <p className="download-featured-meta">
            {FEATURED_DOWNLOAD.size} · Windows 64 位 · 含光影与优化
          </p>
          <div className="download-featured-actions">
            <a
              className="download-btn fuwari-btn-primary"
              href={FEATURED_DOWNLOAD.url}
            >
              下载客户端
            </a>
          </div>
          <p className="download-hash">
            SHA-256: {FEATURED_DOWNLOAD.sha256}
          </p>
        </div>
      </div>

      <ul className="download-list">
        {OTHER_DOWNLOADS.map((item, index) => (
          <li key={index} className="download-item">
            <div className="download-item-info">
              <span className="download-item-name">{item.name}</span>
              <span className="download-item-size">{item.size}</span>
            </div>
            <a className="download-item-btn fuwari-btn-regular" href={item.url}>
              下载
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
