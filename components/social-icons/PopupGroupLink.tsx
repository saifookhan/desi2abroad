const PopupGroupLink = ({ text, link, iconType, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="pt-2 w-10 h-10 text-gray-700">{icon}</div>
        <div className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {text}
        </div>
      </div>
    </a>
  )
}
export default PopupGroupLink
