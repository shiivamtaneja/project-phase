import { useDispatch } from 'react-redux';
import { useTypewriter } from 'react-simple-typewriter';
import { toggleSearchFullScreen } from '../../../redux/slice';

const Search = () => {
  const dispatch = useDispatch()
  const [text, count] = useTypewriter({
    words: [
      "body-type",
      "model",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 250,
  });
  const placeholder = "Search bikes by " + text;
  return (
    <button
      before={placeholder}
      className=" w-full cursor-text h-12 bg-[#f5f5f5] rounded-lg border-[1px] border-[#dde5eb] outline-none before:text-[#C4C4C4] before:text-[14px] before:content-[attr(before)] before:absolute before:left-12 before:top-[.95rem]"
      onClick={() => dispatch(toggleSearchFullScreen(true))}
    />
  )
}

export default Search