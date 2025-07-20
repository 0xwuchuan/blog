import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  // Check if title starts with "0x" and style it accordingly
  const titleContent = title.startsWith("0x") ? (
    <>
      <span class="title-prefix">0x</span>
      <span class="title-main">{title.slice(2)}</span>
    </>
  ) : (
    title
  )

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{titleContent}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title .title-prefix {
  color: var(--gray);
}

.page-title .title-main {
  color: var(--dark);
  transition: color 0.2s ease;
}

.page-title a:hover .title-main {
  color: var(--tertiary);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
