type CloudflareVideoPlayerProps = {
  className?: string;
  iframeClassName?: string;
};

export function CloudflareVideoPlayer({
  className,
  iframeClassName,
}: CloudflareVideoPlayerProps) {
  return (
    <div className={className ?? "cloudflare-player-shell"}>
      <iframe
        className={iframeClassName ?? "cloudflare-player-iframe"}
        src="https://customer-8urn5752m36lkzxs.cloudflarestream.com/3c0189295c9978ff80eb06e972d2562c/iframe?controls=true&preload=auto"
        title="Hesperus walkthrough video"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
