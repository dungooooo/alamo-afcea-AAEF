Global Styling & Theming Guidelines
Theme/Vibe: Professional non-profit, educational, authoritative but approachable. Not overly flashy or "start-up" trendy; it should feel established and trustworthy.

Color Palette:

Primary: AFCEA Navy Blue (#003366 or similar) for headers, primary buttons, and solid backgrounds.

Secondary: Tech-inspired Light Blue (#007BFF or #4A90E2) for accents, secondary buttons, and links.

Backgrounds: Crisp White (#FFFFFF) for main content areas, Light Slate Gray (#F4F6F9) for alternating section backgrounds to break up content.

Text: Dark Charcoal (#2C3E50) for readability, never pure black.

Typography: Clean, modern sans-serif (e.g., Inter, Roboto, or Open Sans). Use bold weights for headings and medium/regular for body text.

Structure: Max-width container of 1200px centered on the page. Use generous padding (e.g., 80px top/bottom for sections) to let the content breathe.

Figma Layout Structure (Top to Bottom)
1. Hero Section (Visual Impact & Primary Actions)
Layout: Full-width container (within the page body).

Background: High-quality image of high school students actively building a computer (representing the Port San Antonio event). Apply a heavy Navy Blue gradient overlay (80% opacity) so white text is highly readable.

Typography:

Subheading (Small, All Caps, Light Blue): ALAMO AFCEA EDUCATION FOUNDATION

H1 Heading (Bold, White, Large): Equipping San Antonio’s Next Generation of Tech Leaders.

Body (White, Medium): Creating opportunities for students, educators, and communities through meaningful investment in science, technology, engineering, and mathematics (STEM).

Calls to Action (Flexbox Row):

Button 1 (Primary): Solid Light Blue, White Text -> "Apply for a Grant"

Button 2 (Secondary): Transparent with White Border, White Text -> "Partner With Us"

2. Impact Metrics Bar (Building Trust)
Layout: A single horizontal bar overlapping the bottom of the hero image and the white space below it (a floating card effect).

Style: White background, subtle drop shadow, rounded corners (8px).

Content: 3-column grid, centered text.

Column 1: Icon (Graduation Cap) | $X+ | Awarded in Scholarships & Grants

Column 2: Icon (School Building) | 14+ | School Districts Supported

Column 3: Icon (Users) | 100s | Of Students Impacted Annually

3. "Choose Your Path" Section (Audience Routing)
Background: Light Slate Gray (#F4F6F9).

Heading (H2, Navy Blue, Centered): How Can We Help You Build the Future?

Layout: CSS Grid, 4 equal columns. Each is a clickable Card.

Card Style: White background, subtle border, hover effect (slight lift and border color change to Light Blue).

Card Contents:

Card 1 (Educators): Chalkboard Icon. Title: "For Educators". Body: "Need durable STEM tools for your classroom? Apply for our Teaching Tool Grants." Link: "View Educator Grants →"

Card 2 (Students): Laptop Icon. Title: "For Students". Body: "Explore our Cyber & STEM academic scholarships with local universities." Link: "View Scholarships →"

Card 3 (Industry): Building Icon. Title: "For Industry". Body: "Bridge the commercial and defense gap by funding the future tech workforce." Link: "Sponsor & Donate →"

Card 4 (Volunteers): Handshake Icon. Title: "For Volunteers". Body: "Mentor students or support our local hands-on STEM events." Link: "Get Involved →"

4. Impact Storytelling (The "Show, Don't Tell" Section)
Background: Crisp White (#FFFFFF).

Layout: 50/50 Split (2 columns).

Left Column (Image): A dynamic photo collage or a single strong photo of a diverse group of students holding the PCs they built. Subtle rounded corners.

Right Column (Text):

H2 Heading: Moving Beyond the Screen: Real Hands-On Impact.

Body Paragraph: "We prioritize funding that creates tangible outcomes, like our recent Computer Build Day at Port San Antonio. Over 100 students from 14 districts not only learned how to build a PC from scratch alongside industry mentors, but they took the computers home to bridge the digital divide."

Button: "See Our Impact Report" (or "View Past Recipients").

5. Grant & Scholarship Details (Organizing the Text Wall)
Background: Navy Blue (#003366) with White Text to visually break up the page.

Heading: Our Programs at a Glance.

Layout: Instead of paragraphs, use an Accordion UI (collapsible sections) or clean Horizontal Tabs so the user isn't overwhelmed with text.

Tab 1: STEM Teaching Tool Grants. Include the tiers ($750, $1000, $1250). Include a clear status badge (e.g., "Portal Opening Soon" or "Accepting Applications").

Tab 2: Ron Moore Outstanding STEM Educators Award. Include tiers ($2k, $3k, $5k) and a link to the dedicated page.

Tab 3: Academic Scholarships. List the university partners (UTSA, St. Mary's, OLLU, etc.) with bullet points.

Tab 4: General Grants. Briefly explain the "out of cycle" requests.

6. Transparency & Community (Where the Money Goes)
Background: Light Slate Gray (#F4F6F9).

Layout: Centered header, followed by a clean, visually appealing 3-column list or a stylized map of Bexar County and surrounding rural areas.

Text: "Proudly supporting Title I, Rural, and Underrepresented schools across the region."

UI Element: A stylized, scrolling ticker or a neat grid of logos/names of recent school districts and partners supported (e.g., Uvalde CISD, SAMSAT, CyberPatriot).

7. Upcoming Events (Replacing the Google News Widget)
Background: Crisp White.

Heading: Upcoming Foundation Events.

Layout: A vertical list view. Each event is a horizontal strip.

Strip Style:

Left: Date block (e.g., "OCT 08" with "OCT" in Light Blue, "08" in large Navy text).

Middle: Event Title (e.g., "Alamo AFCEA Cyber Career-Education Symposium") and location (e.g., "Norris Center").

Right: "Register Now" ghost button.

Developer Notes for Implementation:
Keep the CSS scoped to this specific content wrapper so it doesn't conflict with the parent site's global styles.

The accordion/tabs in Section 5 are crucial for SEO and accessibility while keeping the visual height of the page manageable.

Ensure the layout shifts gracefully to a single-column stack on mobile (especially the 4-card Pathways grid and the 50/50 Storytelling split), as many students and teachers will browse this on their phones.