# Starter Site Implementation Plan

## Goal

Use this live Eleventy site as the basis for a reusable starter site for future client projects.

The objective is to:

- keep the existing design system, layout patterns, and reusable page structure
- remove all business-specific branding, copy, case studies, offers, and legal details
- replace current content with neutral placeholder content
- leave yourself with a clean starting point for future builds

This document is intentionally written as an implementation guide, not a strategy note.

## Important Constraints

- Treat this repository as the source of the starter, but do not edit `dist/` directly.
- Make all changes in `src/`, `.eleventy.js`, and other source/config files only where needed.
- Preserve reusable sections like hero blocks, pricing cards, feature grids, FAQ patterns, header, footer, and CTA sections.
- Remove or neutralise anything tied to Code Craft North as a real business.
- Remove or neutralise anything tied to real clients, locations, testimonials, contact details, analytics IDs, or live-domain metadata.
- Keep the site functional after the reset so it can still build cleanly and serve as a base project.

## Recommended Approach

Work in this order:

1. Create a backup branch from the current live state.
2. Reset global branding and metadata.
3. Reset shared navigation and footer content.
4. Replace page content with placeholders.
5. Replace service, location, post, and legal content with placeholders.
6. Replace portfolio/client references with generic examples.
7. Review forms, email links, structured data, and analytics.
8. Build and QA the result.
9. Save the finished version as the starter baseline.

## Phase 1: Create a Safe Working Copy

Before touching content:

1. Create a new branch specifically for the starter conversion.
2. Confirm the current live deployment is not automatically tied to every branch.
3. If deployment is branch-based, make sure only the production branch deploys live.
4. Tag or otherwise record the current business site state so you can restore it later if needed.

Suggested branch names:

- `starter-template-reset`
- `starter-site-base`

## Phase 2: Reset Global Brand and Metadata

### Files to update

- `src/_layouts/base.njk`
- `src/_includes/header.njk`
- `src/_includes/footer.njk`
- `src/_layouts/blog-post.njk`
- `.eleventy.js` if any filters/shortcodes include business-specific output

### What to change

Replace all of the following with placeholders:

- business name
- default title format
- default meta description
- author name
- canonical domain
- Open Graph site name
- Open Graph image default
- Twitter metadata
- favicon/logo references if they are branded
- structured data content
- founder name
- business address
- business email
- LinkedIn or other social links
- opening hours
- price range
- geography-specific schema data

### Placeholder recommendation

Use a neutral temporary brand such as:

- `Starter Business`
- `Your Business Name`
- `Example Studio`

Use a temporary domain format such as:

- `https://www.example.com`
- `https://starter-site.local`

### Specific items to remove or neutralise

In `src/_layouts/base.njk`:

- remove the current Google Analytics ID or replace it with a placeholder token
- change localStorage consent key names only if you want starter branding consistency
- replace all `codecraftnorth.co.uk` references
- replace business-specific schema markup with a generic placeholder business schema
- replace `Carl Ball` and `Code Craft North`

In `src/_includes/header.njk`:

- replace logo images if they contain the current brand
- replace navigation labels only if you want a more generic starter IA
- change CTA labels from the current offer to neutral placeholders like `Primary CTA`

In `src/_includes/footer.njk`:

- remove current sales CTA copy
- replace the email address
- replace copyright text
- replace any “areas we serve” or business-specific links if not needed in the starter

## Phase 3: Define the Starter Information Architecture

Decide whether the starter should keep the current page set or be simplified.

### Option A: Keep the full current structure

Best if you want a rich base with reusable patterns already wired in.

Keep these pages:

- home
- about
- services index
- individual service pages
- resources
- contact
- thank-you pages
- website review page
- review thank-you page
- locations index
- location detail pages
- legal pages
- blog posts

### Option B: Keep only the core starter pages

Best if you want a leaner baseline.

Keep these pages:

- home
- about
- services
- contact
- one sample service page
- one sample blog post
- privacy policy
- terms
- cookie policy

Archive or remove:

- extra location pages
- extra service variations
- business-specific thank-you funnels
- niche landing pages

For a starter site, Option A is usually better at first. You can always delete later.

## Phase 4: Replace Shared Section Copy With Placeholder Content

### Key principle

Do not redesign first. Strip and neutralise content while keeping the section structures intact.

### Reusable section types already present in this repo

- hero sections
- pricing cards
- feature grids
- process/how-it-works sections
- about sections
- portfolio/project cards
- FAQ sections
- CTA banners
- contact forms
- legal page layouts

### Placeholder copy style

Use placeholders that describe content intent clearly. Avoid lorem ipsum.

Good examples:

- `Clear headline about the main offer`
- `Short supporting paragraph explaining who this service is for and why it matters`
- `Primary CTA`
- `Feature title`
- `Brief explanation of the feature benefit`
- `Pricing plan name`
- `Add pricing summary here`

Avoid:

- vague lorem ipsum paragraphs
- live-sounding claims
- fake guarantees
- fake testimonials that read like real endorsements

## Phase 5: Page-by-Page Implementation

### 1. Home page

File:

- `src/index.njk`

Replace:

- hero headline and supporting copy
- pricing teaser content and prices
- features copy
- portfolio/case study section
- process content
- about summary content
- FAQ copy
- CTA labels

Recommended placeholder structure:

- hero with generic value proposition
- three pricing cards with placeholder plan names
- feature grid with neutral benefits
- sample project cards renamed to `Project One`, `Project Two`, `Project Three`
- process section with generic discovery/build/launch steps
- about section with neutral founder/team placeholder copy
- FAQ section with editable sample questions

### 2. About page

File:

- `src/about.njk`

Replace:

- founder story
- real career history
- business philosophy that references the current brand
- cost comparisons framed around the current offer
- quotes

Use:

- placeholder founder/team intro
- placeholder mission statement
- placeholder principles cards
- generic three-step workflow

### 3. Services index

File:

- `src/services.njk`

Replace:

- service names if they are too tied to the current commercial model
- all prices
- plan details
- subscription-specific language
- comparison table specifics

Use:

- `Starter Plan`
- `Growth Plan`
- `Custom Plan`

Keep:

- pricing card layout
- feature comparison layout
- CTA patterns

### 4. Individual service pages

Files:

- `src/services/essentials-website-subscription.njk`
- `src/services/growth-website-subscription.njk`
- `src/services/one-off-website-build.njk`
- `src/services/websites-for-charities.njk`

Replace:

- all service-specific selling points
- all plan pricing
- all references to charities or niche markets unless you want those as reusable vertical templates

Recommended conversion:

- turn each page into a generic service template variant
- rename internally as variations like:
  - `core-service-template`
  - `growth-service-template`
  - `custom-project-template`
  - `sector-landing-template`

If you want to keep URLs readable for now, placeholder copy is enough.

### 5. Locations pages

Files:

- `src/locations.njk`
- `src/locations/liverpool.njk`
- `src/locations/wirral.njk`

Replace:

- city names
- region-specific SEO text
- local business positioning
- location-based schema if any exists

Recommended approach:

- either convert them into generic local landing page templates
- or remove them from the starter if you do not expect to build local SEO sites often

If kept, rename copy to:

- `City Landing Page Template`
- `Area Service Template`

### 6. Resources and blog

Files:

- `src/resources.njk`
- `src/posts/*.md`
- `src/posts/posts.json`
- `src/_layouts/blog-post.njk`

Replace:

- post titles
- excerpts
- author references
- dates if they imply real publication history
- category/SEO copy tied to the current business

Use:

- one to three placeholder blog posts
- sample titles such as:
  - `Example Resource Article`
  - `How to Structure a Service Page`
  - `What to Include on a Small Business Homepage`

If you want the starter leaner:

- keep one sample post only
- remove the rest

### 7. Contact and lead capture pages

Files:

- `src/contact.njk`
- `src/thank-you.njk`
- `src/website-review.njk`
- `src/website-review-thanks.njk`

Replace:

- all offer-specific copy
- form labels tied to free website reviews or business-specific consultations
- any hardcoded email addresses
- any third-party form actions

Recommended placeholder flow:

- `Contact` page becomes a general enquiry form template
- `Thank you` page becomes a generic submission success page
- `Website review` page becomes either:
  - a `Lead Magnet Landing Page Template`
  - or a `Consultation Request Template`

### 8. Legal pages

Files:

- `src/privacy-policy.njk`
- `src/cookie-policy.njk`
- `src/terms-of-service.njk`

These should not contain live business details in a starter.

Replace with:

- clearly marked placeholder legal text
- notes that these must be replaced before launch

Recommended top-of-page notice:

- `This is placeholder legal content for a starter site. Replace with business-specific legal text before publishing.`

### 9. 404 and utility pages

Files:

- `src/404.njk`
- `src/sitemap.njk`
- `src/robots.txt.njk`

Check for:

- live domain references
- brand references
- contact details

Replace with neutral defaults where needed.

## Phase 6: Replace Portfolio and Real-World References

### Files most likely affected

- `src/index.njk`
- `src/about.njk`
- service pages
- resource pages

### Remove or replace

- named client projects
- client logos
- project outcomes with real numbers
- founder photo if it is personal branding and not intended for the starter
- niche claims tied to current experience

### Replacement options

Option 1:

- keep the portfolio section but relabel it as sample project cards

Example labels:

- `Project One`
- `Project Two`
- `Project Three`

Option 2:

- replace the portfolio section entirely with a generic content block like `Example Results` or `Featured Work Template`

### Image handling

Audit files in:

- `src/img/`
- `src/img/blog/`
- `src/img/logos/`

Decide what to keep:

- keep generic illustrations and abstract assets
- remove or replace client screenshots, founder photos, and branded logos

If you do not want to source new images yet:

- reuse neutral SVG illustrations already in the repo
- replace screenshot sections with simple placeholder cards and text

## Phase 7: Review JavaScript and Functional Elements

### Files to review

- `src/js/script.js`
- `src/_includes/cookie-consent.njk`

Check for:

- current brand names in UI text
- analytics consent logic tied to the current GA property
- form behaviour referencing real endpoints
- success/failure messages containing live-business wording

Keep:

- theme toggle
- menu behaviour
- FAQ toggles
- cookie consent mechanics

Replace:

- analytics IDs
- consent copy if it mentions the business by name

## Phase 8: Review CSS for Brand-Locked Language

### File to review

- `src/css/input.css`

You do not need a redesign at this stage, but check for:

- branded utility names
- classes named after the current business
- comments that reference the live business

Usually you can keep:

- colour tokens
- component classes
- layout utilities

Only change CSS if:

- a class name is too brand-specific
- a logo/image dependency breaks after the content reset

## Phase 9: Placeholder Content Rules

Use these rules consistently across the repo.

### Headlines

- short
- descriptive
- obviously editable

Examples:

- `Headline about your main offer`
- `Section heading for services`
- `Pricing options for different needs`

### Paragraphs

- explain the intent of the section
- do not read like final marketing copy

Example:

- `Use this paragraph to explain the service, the audience, and the primary benefit in two or three sentences.`

### Buttons

Examples:

- `Primary CTA`
- `Secondary CTA`
- `Learn more`
- `Contact us`

### Pricing

Use placeholders rather than fake real pricing.

Examples:

- `From £XXX/month`
- `Starting at £X,XXX`
- `Custom quote`

### Testimonials and results

Do not invent realistic testimonials.

Use:

- `Testimonial placeholder`
- `Result metric placeholder`

## Phase 10: Build and QA Checklist

After the content reset:

1. Run `npm run build`.
2. Fix any broken includes, image references, or front matter issues.
3. Run the local site and click through every retained page.
4. Check header and footer links.
5. Check all CTA buttons.
6. Check forms and thank-you routes.
7. Check that no live email addresses remain.
8. Check that no live domain references remain.
9. Check that no real client names remain.
10. Check that no real founder/personal bio content remains.
11. Check that social cards still render safely.
12. Check that legal pages are clearly marked as placeholders.
13. Check mobile navigation and theme toggle still work.

## Search Terms for Final Cleanup

Run repository-wide searches for these terms and remove or replace all matches where appropriate:

- `Code Craft North`
- `CodeCraft North`
- `Carl`
- `Carl Ball`
- `codecraftnorth`
- `hello@`
- `@codecraftnorth`
- `raiise`
- `print logic`
- `pam`
- `liverpool`
- `wirral`
- `G-`
- `codecraftnorth.co.uk`

Also search for:

- real phone numbers
- real addresses
- real social handles
- any client domains in links or image alts

## Suggested Deliverable Structure for the Finished Starter

When complete, the starter should feel like this:

- generic brand and metadata
- reusable header/footer
- clean homepage with sample content blocks
- reusable services index with pricing card patterns
- generic service detail page templates
- optional location page templates
- optional blog/resource templates
- generic contact and thank-you flow
- placeholder legal pages
- no live-business identifiers

## Optional Cleanup After the Reset

Once the starter version is stable, consider a second pass to make it easier to reuse:

1. Rename pages and files for template clarity.
2. Extract repeated section patterns into includes.
3. Add comments around editable sections.
4. Create a short `README` explaining how to swap brand, copy, colours, and imagery for a new client.
5. Create a launch checklist for cloning this starter into a new client project.

## Practical File Checklist

Use this as the working checklist during implementation.

- `src/_layouts/base.njk`
- `src/_layouts/blog-post.njk`
- `src/_includes/header.njk`
- `src/_includes/footer.njk`
- `src/_includes/cookie-consent.njk`
- `src/index.njk`
- `src/about.njk`
- `src/services.njk`
- `src/services/essentials-website-subscription.njk`
- `src/services/growth-website-subscription.njk`
- `src/services/one-off-website-build.njk`
- `src/services/websites-for-charities.njk`
- `src/resources.njk`
- `src/contact.njk`
- `src/thank-you.njk`
- `src/website-review.njk`
- `src/website-review-thanks.njk`
- `src/locations.njk`
- `src/locations/liverpool.njk`
- `src/locations/wirral.njk`
- `src/privacy-policy.njk`
- `src/cookie-policy.njk`
- `src/terms-of-service.njk`
- `src/404.njk`
- `src/posts/posts.json`
- `src/posts/subscription-vs-one-off-website.md`
- `src/posts/how-to-choose-the-right-type-of-website-for-your-business.md`
- `src/posts/why-website-speed-matters.md`
- `src/posts/seo-basics-for-small-businesses.md`
- `src/js/script.js`
- `src/css/input.css`
- `src/img/`

## Final Recommendation

Do the first pass as a pure content neutralisation exercise.

Do not start by redesigning, renaming everything, or re-architecting components. The fastest route to a strong starter is:

1. remove real business content
2. keep the existing working structure
3. replace everything with clear placeholder content
4. verify the build
5. only then improve the starter for reuse
