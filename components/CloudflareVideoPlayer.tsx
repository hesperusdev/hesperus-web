type CloudflareVideoPlayerProps = {
  className?: string;
  iframeClassName?: string;
  title?: string;
};

const streamVideoId = "7c995841570200d3f0dfb7dd5410113f";
const posterPath = "/hesperus-promo-video-thumbnail-1.png";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gethesperus.com";
const posterUrl = new URL(posterPath, siteOrigin).toString();

export function CloudflareVideoPlayer({
  className,
  iframeClassName,
  title = "Hesperus video",
}: CloudflareVideoPlayerProps) {
  return (
    <div className={className ?? "cloudflare-player-shell"}>
      <iframe
        className={iframeClassName ?? "cloudflare-player-iframe"}
        src={`https://customer-8urn5752m36lkzxs.cloudflarestream.com/${streamVideoId}/iframe?controls=true&preload=auto&poster=${encodeURIComponent(posterUrl)}`}
        title={title}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
