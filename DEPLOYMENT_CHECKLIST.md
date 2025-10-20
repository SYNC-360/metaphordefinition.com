# Deployment Checklist - Metaphor Definition MVP + Content Expansion

## Pre-Deployment Verification

### Files Ready
- [x] index.html - Homepage (3,000+ words)
- [x] calculator.html - Tools page
- [x] embedding-guide.html - Embedding guide
- [x] blog/extended-metaphor-guide.html - Blog 1
- [x] blog/how-to-write-metaphors.html - Blog 2
- [x] blog/metaphor-in-literature.html - Blog 3
- [x] blog/metaphors-business-marketing.html - Blog 4
- [x] styles.css - Main stylesheet
- [x] calculator.css - Calculator styles
- [x] script.js - Main JavaScript
- [x] calculator.js - Calculator functionality
- [x] robots.txt - Crawler directives
- [x] sitemap.xml - XML sitemap
- [x] .htaccess - Apache configuration

### Documentation Ready
- [x] README.md - Deployment guide
- [x] KEYWORD_STRATEGY.md - Keyword analysis
- [x] PROJECT_SUMMARY.md - Competitive analysis
- [x] SEO_QUICK_REFERENCE.md - SEO lookup
- [x] CONTENT_EXPANSION.md - Content details
- [x] DEPLOYMENT_CHECKLIST.md - This file

---

## Step 1: Upload to Server (Day 1)

### Using FTP/SFTP
```bash
# Connect to server
sftp user@metaphordefinition.com

# Create blog directory if needed
mkdir public_html/blog

# Upload all files
cd /Users/richard/Desktop/my-calculators/metaphordefinition.com
put *.html public_html/
put *.css public_html/
put *.js public_html/
put *.xml public_html/
put .htaccess public_html/
put *.txt public_html/
put *.md public_html/

# Upload blog posts
mput blog/*.html public_html/blog/

# Exit SFTP
exit
```

### Using cPanel/File Manager
1. Log into cPanel
2. Open File Manager
3. Navigate to public_html
4. Create `blog` folder
5. Upload all files maintaining structure
6. Verify permissions (644 for files, 755 for directories)

### Using SSH
```bash
# SSH into server
ssh user@metaphordefinition.com

# Navigate to web root
cd public_html

# Create blog directory
mkdir -p blog

# Check file structure
ls -la
```

- [ ] All HTML files uploaded
- [ ] All CSS files uploaded
- [ ] All JS files uploaded
- [ ] robots.txt uploaded
- [ ] sitemap.xml uploaded
- [ ] .htaccess uploaded
- [ ] blog/ directory created
- [ ] blog/ files uploaded
- [ ] File permissions correct (644 for files)

---

## Step 2: Configure Server (Day 1)

### Verify HTTPS
- [ ] SSL certificate installed
- [ ] HTTPS redirects working (.htaccess configured)
- [ ] Test: Visit https://metaphordefinition.com

### Verify .htaccess
- [ ] GZIP compression enabled
- [ ] Caching headers working
- [ ] HTTPS redirect working
- [ ] Test using: https://www.giftofspeed.com/gzip-test/

### Test Page Load
- [ ] Homepage loads: https://metaphordefinition.com
- [ ] Calculator loads: https://metaphordefinition.com/calculator.html
- [ ] Blog 1 loads: https://metaphordefinition.com/blog/extended-metaphor-guide.html
- [ ] Blog 2 loads: https://metaphordefinition.com/blog/how-to-write-metaphors.html
- [ ] Blog 3 loads: https://metaphordefinition.com/blog/metaphor-in-literature.html
- [ ] Blog 4 loads: https://metaphordefinition.com/blog/metaphors-business-marketing.html
- [ ] Embedding guide loads: https://metaphordefinition.com/embedding-guide.html

### Test Links
- [ ] All internal links work (navigation)
- [ ] All CSS styles load (layout looks good)
- [ ] JavaScript runs (calculator tools work)
- [ ] Meta tags present (inspect page source)
- [ ] Schema markup present (JSON-LD in source)

---

## Step 3: Google Search Console Setup (Day 2)

### Add Property
1. Go to https://search.google.com/search-console
2. Click "URL prefix" property type
3. Enter: https://metaphordefinition.com
4. Verify ownership (choose method):
   - [ ] HTML file verification
   - [ ] DNS verification
   - [ ] HTML tag verification
   - [ ] Google Analytics verification

### Add Sitemap
1. In GSC, go to Sitemaps
2. Click "New sitemap"
3. Enter: https://metaphordefinition.com/sitemap.xml
4. Submit
5. Wait for crawl completion

### Verify robots.txt
1. In GSC, go to Settings > Crawlers > robots.txt Tester
2. Verify robots.txt is accessible
3. Check that all paths are allowed (unless intentionally blocked)
4. Test Googlebot access

### Request Indexation
1. In GSC, go to URL Inspection
2. Enter: https://metaphordefinition.com/blog/extended-metaphor-guide.html
3. Click "Request indexing"
4. Repeat for each blog post
5. Repeat for main pages

- [ ] Property added to GSC
- [ ] Ownership verified
- [ ] Sitemap submitted
- [ ] robots.txt verified
- [ ] URL inspection requests submitted

---

## Step 4: Bing Webmaster Tools Setup (Day 2)

1. Go to https://www.bing.com/webmasters
2. Click "Add property"
3. Enter: https://metaphordefinition.com
4. Verify ownership (XML file or meta tag)
5. Submit sitemap: https://metaphordefinition.com/sitemap.xml

- [ ] Added to Bing Webmaster Tools
- [ ] Verified ownership
- [ ] Sitemap submitted

---

## Step 5: Analytics Setup (Day 2)

### Google Analytics 4
```html
<!-- Add this to <head> of all pages (already in index.html) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

1. Go to https://analytics.google.com
2. Create property: "Metaphor Definition"
3. Get tracking ID (G-XXXXXXXXXX)
4. Replace in all HTML files (or use GTM)
5. Wait 24-48 hours for data collection

- [ ] Google Analytics 4 property created
- [ ] Tracking code added to pages
- [ ] Initial data collection verified

---

## Step 6: Performance Testing (Day 3)

### Page Speed
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev
  - Target: 80+ on Desktop, 60+ on Mobile
- [ ] GTmetrix: https://gtmetrix.com
  - Target: Grade B or higher

### Functionality
- [ ] Metaphor Analyzer tool works
- [ ] Metaphor Generator tool works
- [ ] Literary Device Identifier works
- [ ] Quiz loads and functions
- [ ] All buttons clickable
- [ ] Forms work (if any)

### SEO Checks
- [ ] Meta titles present and optimized
- [ ] Meta descriptions present
- [ ] H1 tag present on each page
- [ ] H2/H3 hierarchy correct
- [ ] Internal links working
- [ ] External links working
- [ ] Schema markup valid (structured data)
- [ ] Mobile responsive (test on phone)

Use tools:
- [ ] Mobile Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] Schema Markup Validator: https://validator.schema.org/
- [ ] Link Checker: https://www.brokenlinkcheck.com/

---

## Step 7: Monitoring & Verification (Days 3-7)

### Daily (First Week)
- [ ] Check Google Search Console for errors
- [ ] Verify pages are being indexed
- [ ] Monitor crawl stats
- [ ] Check for mobile usability issues

### Weekly (First Month)
- [ ] Monitor keyword rankings (use tool like SE Ranking)
- [ ] Track organic traffic in Analytics
- [ ] Review top landing pages
- [ ] Check for new indexing errors

### Rankings to Track
- [ ] metaphor definition
- [ ] definition of metaphor
- [ ] extended metaphor definition
- [ ] how to write metaphors
- [ ] metaphor in literature
- [ ] metaphor examples

---

## Step 8: Backlink Building (Weeks 2-4)

### Initial Backlinks (10-15)
- [ ] Identify 20-30 target sites (educational, writing-focused)
- [ ] Create outreach email template
- [ ] Send 10-15 partnership/guest post pitches
- [ ] Track responses and link placements

### Backlink Sources
- [ ] Educational sites linking to embedding-guide.html
- [ ] Writing blogs linking to how-to-write-metaphors.html
- [ ] Literary sites linking to metaphor-in-literature.html
- [ ] Business sites linking to metaphors-business-marketing.html

---

## Step 9: Content Promotion (Weeks 2-4)

### Social Media
- [ ] Share homepage on LinkedIn
- [ ] Share each blog post on Twitter
- [ ] Share on Reddit (relevant subreddits)
- [ ] Share on Facebook
- [ ] Share on relevant communities (Medium, Dev.to, etc.)

### Email (If List Exists)
- [ ] Send announcement email
- [ ] Include links to blog posts
- [ ] Highlight unique features (tools, examples)

### Directories
- [ ] Submit to education directories
- [ ] Submit to writing resource directories
- [ ] Submit to literary databases

- [ ] Social media posts created
- [ ] 3-5 relevant communities identified
- [ ] Directory submissions made

---

## Step 10: First Month Monitoring (Week 4)

### Indexation Status
- [ ] All 7 main pages indexed
- [ ] All 4 blog posts indexed
- [ ] All subpages accessible

### Ranking Progress
- [ ] Track rankings daily/weekly
- [ ] Note any improvements
- [ ] Identify opportunities
- [ ] Monitor competitors

### Traffic Metrics
- [ ] Track organic traffic growth
- [ ] Monitor bounce rate
- [ ] Track pages/session
- [ ] Monitor time on page
- [ ] Analyze user behavior

### Update Sitemap (If Needed)
If you add more pages in Month 1:
- [ ] Update sitemap.xml
- [ ] Resubmit to Google/Bing
- [ ] Request indexation

---

## Troubleshooting

### Pages Not Indexing
1. Check robots.txt - ensure pages are allowed
2. Check for noindex meta tag
3. Check GSC for manual actions
4. Check for server errors (404s, 500s)
5. Submit URL directly in GSC

### Poor Page Speed
1. Check Core Web Vitals in GSC
2. Test at pagespeed.web.dev
3. Review .htaccess caching settings
4. Consider CDN if needed
5. Optimize image sizes

### Low Traffic After 4 Weeks
1. Check keyword rankings
2. Verify pages are indexed
3. Review meta descriptions (CTR)
4. Build more backlinks
5. Consider content improvements

### Technical Issues
1. Check console for JavaScript errors
2. Verify SSL certificate
3. Check server error logs
4. Test with different browsers
5. Test on mobile devices

---

## Success Criteria (Month 1)

✅ **Indexation**: 100% of pages indexed
✅ **Ranking**: Main keyword #30-50 (goal)
✅ **Traffic**: 1,500-2,500 monthly visits (goal)
✅ **Technical**: 90+ PageSpeed score
✅ **Mobile**: 100% mobile friendly
✅ **Performance**: <3 second load time
✅ **Backlinks**: 10-15 quality backlinks

---

## Timeline Summary

| Week | Action | Owner |
|------|--------|-------|
| Week 1 | Upload files, configure server | Admin |
| Week 2 | GSC/Bing setup, analytics | Admin |
| Week 2 | Performance testing | Developer |
| Week 3 | Monitor indexation, begin backlink building | SEO |
| Week 4 | Social promotion, assess progress | Marketing |

---

## Maintenance Going Forward

### Weekly
- [ ] Monitor GSC for errors
- [ ] Check rankings for 5 keywords
- [ ] Review new backlink opportunities

### Monthly
- [ ] Update sitemap if content changes
- [ ] Review analytics trends
- [ ] Plan next blog post
- [ ] Assess backlink progress

### Quarterly
- [ ] Comprehensive SEO audit
- [ ] Competitor analysis
- [ ] Keyword strategy review
- [ ] Plan new content

---

## Contact & Support

**Questions about deployment?**
- See: README.md
- See: SEO_QUICK_REFERENCE.md
- See: CONTENT_EXPANSION.md

**Issues during deployment?**
- Check server error logs
- Verify .htaccess syntax
- Test in different browser
- Contact hosting provider

---

**Status: READY FOR DEPLOYMENT ✅**

You now have a complete checklist to deploy your metaphor definition MVP with comprehensive content expansion.

**Good luck achieving #1 rankings! 🚀**
