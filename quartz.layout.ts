import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
    	title: "Navigate",
		folderClickBehavior: "link", 
		filterFn: (node) => {
			// exclude files with a frontmatter key named "excludeFromExplorer"
			if (node.file?.frontmatter?.excludeFromExplorer || node.name === "resources") {
				return false
			} else {
				return true
			}
		} 
    })),
  ],
  right: [
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
        	title: "Navigate",
		folderClickBehavior: "link", 
		filterFn: (node) => {
			// exclude files with a frontmatter key named "excludeFromExplorer"
			if (node.file?.frontmatter?.excludeFromExplorer || node.name === "resources") {
				return false
			} else {
				return true
			}
		} 
    }
    )),
  ],
  right: [],
}
