import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"
import type { QuartzPluginData } from "./quartz/plugins/vfile"

// Alphabetical order in folder page
const byTitleAlphabetical = (f1: QuartzPluginData, f2: QuartzPluginData): number => {
  const title1 = (f1.frontmatter?.title ?? "").toLowerCase()
  const title2 = (f2.frontmatter?.title ?? "").toLowerCase()
  return title1.localeCompare(title2, "fr", { numeric: true, sensitivity: "base" })
}
componentRegistry.setOptionOverrides("@quartz-community/folder-page", { sort: byTitleAlphabetical })

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
