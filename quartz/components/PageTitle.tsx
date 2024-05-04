import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <span id="accent0x">0x</span>
        {title}
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

#accent0x {
  color: #59595A
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
