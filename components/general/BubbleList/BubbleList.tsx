import { HomepageCateogriesCategories } from 'src/types/types'

type BubbleList = {
  category: HomepageCateogriesCategories[]
  secondCateogryFlag?: boolean
}

function BubbleList({ category, secondCateogryFlag }: BubbleList) {
  return (
    <ul
      className={
        (secondCateogryFlag && 'mt-4') + ' grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3'
      }
    >
      {category.map((subChapter) => {
        return (
          <li key={subChapter.title}>
            {' '}
            <a
              className="group border border-slate-400 bg-slate-100 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden"
              href={subChapter.path}
            >
              {' '}
              <span className="relative z-20 text-slate-800">{subChapter.title}</span>{' '}
              <span
                data-progress=""
                className="absolute bottom-0 left-0 top-0 z-10 w-0 bg-[#172a3a] transition-[width] duration-300"
              ></span>{' '}
            </a>{' '}
          </li>
        )
      })}
    </ul>
  )
}

export default BubbleList
