type CloudflareVideoPlayerProps = {
  className?: string;
  iframeClassName?: string;
  title?: string;
};

export function CloudflareVideoPlayer({
  className,
  iframeClassName,
  title = "Hesperus video",
}: CloudflareVideoPlayerProps) {
  return (
    <div className={className ?? "cloudflare-player-shell"}>
      <iframe
        className={iframeClassName ?? "cloudflare-player-iframe"}
        src="https://customer-8urn5752m36lkzxs.cloudflarestream.com/7c995841570200d3f0dfb7dd5410113f/iframe?controls=true&preload=auto"
        title={title}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
