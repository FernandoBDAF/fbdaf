type TrackingEvent =
  | { event: 'hero_cta_click'; cta: string }
  | { event: 'nav_click'; target: string }
  | { event: 'project_open'; slug: string; source: string }
  | {
      event: 'contact_click'
      method: 'email' | 'linkedin' | 'github'
    }
  | { event: 'external_link'; destination: string }
  | { event: 'blog_post_view'; post: string }
  | { event: 'blog_post_click'; post: string }

export function trackEvent(eventData: TrackingEvent): void {
  // Placeholder for PostHog/analytics integration
  if (typeof window !== 'undefined') {
    console.log('[Tracking]', eventData)
    // window.posthog?.capture(eventData.event, eventData);
  }
}

export function trackPageView(path: string): void {
  // Placeholder for page view tracking
  if (typeof window !== 'undefined') {
    console.log('[Tracking] Page view:', path)
    // window.posthog?.capture('$pageview', { path });
  }
}
