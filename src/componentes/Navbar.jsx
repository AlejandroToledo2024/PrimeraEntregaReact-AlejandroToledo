import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavbarComponents() {
  return (
    <>
      <nav className="bg-blue-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABgFBMVEX///8AOJX+/v7QFCz///38///5//////v//f4AOJYAOZP//f31//////f+/P/8/v/UEi0AN5gAOZHLFyz/+f////TTEi8ANZXWES0AMpQAM5TQFSoAKpcAKY////EALpMAN53PAB3OABQANZ4AMqHVACPSACH4//gAI4gAKo3UABbIABvKABIAH5IAMIwAOo7u8/QAI4V9lbdEYaUAPIsAIo7r19QAKp7w5ufPTmLCGyvVAA3MFjDa5/DrxcIAN6XHAAZieaxmermMosmNn7ywv9odSZXQ2eY1X53K2PG/zt+XrsggTIxvg7DN2d4xUp1zhMK0veFkfqUAAJgAAHp+kbuxx9IpS6hXbqFWcrMxUaUSQoDvt77CIzl/mLMAFo/Yb3rSj5B5jr7kjZzYLUnjvMDJXW/BLkg/YpPZfoXPUWj34ujSUlq7PUvSo6LbtrDOg4PYbG/cqrjYdYjDNUHoYXHOPVjxwsHn5+HwqKvRiJj2ztQALn7Pgo30orDKUlKnWGqlAAAbI0lEQVR4nO19C0PbRrr2WNbM6DqyLGNEZMe3yMIWYAewY8CmySZcapJwmu+kJ9kDW0ggWQJN2zRNw9J2//qZkTHIxhAgMiT7+emFlkuYR+/MvM97mREAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwADXAAwhUG8SFQj4uofSJygq37j3twaPZXLdQ+kLOIDJ/WgqFXpAmV73YPqEhcXUsCiKidLCdY8kaPAOkjG/tFwZDjFIucryElY5Dv/nTFZBBUuPRm+FWojq6eHK35Z41UHXPbCgwKuNR4VcWjpkKIV0PZSaeLQEhq57ZJ8HAUIB8BrBYOneSEIPRUNtSFJILA0nJu59CzAFEbjrHuvlIGDMIRXD5nJlRAydRFRP3V5uQkCww3+dFDmVx7ix8nD8m2gPfhR6WtfHF1fKWPhKjcgDpfloIqlL0VJvhnSySmI6kXrU/JoICpy3rjDmwePJ1dGULrKNpTdDCpHuPlKqsvp0ice8IMucIwjyly0HHEcWMM/zjycfJhKhU4x3ArlEYXGSukiVlzFG8LpJnAkC1KHywqOJSiI3PZxLn4+gOF2S9FQl+V/flYeAqgpXO2SeB3QC8ZzAwP6X5+lH9oHuI/QfHrKPdNuknwAAlZuTU6PJ5LCuRyW20M5JUdeHdal0I3l7dbLZ0OivxVc3VR3ceNB83EC8ehPTaSQQQpcZr7YgEJmj68YbTrnRfPBkeWR0ROzlGs5L9cZEpfDwyUrzMcFnRVhcGwEw5Pjv/994srQ49benC82lBgLsF7cfMLMio7ZAuS0OJ5OpHLXbeQ13CtLpUO7Ofz9Vbp4xWblAGXLfF6IhJrkmksnCREH8n6ln9x5NenjyfOrvUiqVKBQKw7fSoag3MT+TYZT+/Mj/NtUhWeA+jQAIAhUs3NHFaJT6ZzqJRCkavZFLeUimUhMS/YxEv6aLJYkuJv10v3BuE+p64m8KzxOCD1lQ74MIx8n9Y7iS+OxhXwClG6XvkHrTx0JTaruQwD7a8MGVMhx/3riJY7yPBVxb/xDTtL5RVME/rpDh8A8rWIWIKdUWqPTbGLPnNmGsbwuRU5+mroKbyARccnXpeKMUYg6OoWo9Ew5bY9X+2ZDDj66EoTQthQov0JB/ARKAXlqUYNi0tsq9t9YgGIJ7I1fBMJROTDehSo4HLxCwO+OGLcowbLg7oF8MefD8Rt/ZUW8jjj5r8Bw6chEcgvBtPW+G45RgPJ53t5HA94UhBlP9Z1jSc4UVoPpG7sRA7dWYVQ97MEwj85oIztfLMJ38ZwNgTTseOQLz8bwVPoRl2Rs1BfbJhvzUcL8J3kjehyqvYXw8cLIzRw1oHXLM19egQrB8kmIADCHoJ8NvJCp4C4tLgKNbJT4kICvg4H3GMNn0DJtG3HLf7CJNIFCJKd3aJgiGfbVhaVoXx+85uGPUAtgey7eMF6GeIu++5BROUMDajKYR7itjqKcTfyzcjHWOW0Fky2ozNKz3VYBiUKm9ymY3gdYHhv2bpboe1QvPGyCmdtoQC8pBxIrEvU3U2oOKRlXp2nrGNIpVIPSDYZ88PpVptyZWYCe7w5UINrOepzAiYauGYoq8k2HL0l7HmkK0r4VhSE+tNoDaiyG144xttXaa/AxUDn4s2p5ftHfojFW+FobDlRcOL5DuldUCqrnmoTPMvnybsQ+XpTG2Bjp200AYPg+cIUt0RBOLTbYC+d4xAwE/zRkGtSHdaqwj12/krXpNiQXLkA9eeUshKkN/eFQG+PRUDCT8RvFI0xzCdF1rs4ycgBnygTOM6unU8PeAx7jbu/lmKYG19Tzzh35kt6oIxtRgGQL8KHAbpkeXG8BBCJ1uQ4JiaDtrdPCz7u5gqHhpqSAZqmAyyAhYT0dDqcID0Dva65yo8Ne2LjXMuGVl6vMnfywAhjjYTJQkSYXVb8FQL0pdEDTcljZmuG7aG7jHYwmEYaDZRD13+6miyqcvQB8QrLotiqYRWV/zOUI2sMAYcrgZGEM9JI380cRYQ73dfBdojLFfbAXBhrleQwr7KchpBILqgQwDZJgMimFJH33eUNWzeXXMQfIqcxjm52doAEk/pRBq2tdZd/13KAQ0S/nHqc8oJnXgVnQFyzGnt4/vCeFjPd/2FPuQzW0nptXmbCtvGwcwGIaO/LFnJ8XFIVb+2eCxdq4J2gaBa5m2r3CrbB1igjbd2VnTsP8EQdmwXPrs8EnSxag++hTynMZdiCGMoY2iYTGJGrc+lKGMiYI2bNuIWPlXATHkOTj92QxpKH9nekk9hxPsgsMp8mxLdsetzA5QeBnBt2MWZVj8OSCG9A/57BBYzw2PPlHU8xQEu4CFGPrdtZi2iVh2ZlshUCMxgyrWfL0aFEOe/7zggrWbpKQFgJ0e6c5PQVAEAe1kIhYNnMx6ZL1GA2Ci1PbC8R8PFBIQwyHweaWZkpQef9640OprQybM7Kj8IW8aBhPhmV8QCychV92NQSEgb8GpeOWzHKKYnrgPh9Tege6ZcDBiDoEoVeMwxrAya4hZFikKREExFBy1WfkcgomHDZXtoRcFgJAIkG0EBG5apifCDcuo0U8gIUbZBUSQrkP8eLx0GY/Iyvr6cPIfENMwoZXtlQUsKNypHp9AKueQF8MjAR3s/Pj6l/0ajZMFNOP5/YhpGntIkQUZt+ZoMAzphvbDpdorSlGplPp7E/haDCCCCkA9ew68L5MYkgVPYMPaqzHTDlvF9Z+AIvA1y4p4NrTvvuN9uf0gGDLo35Qu0WShp3WWzvb5CEFBoPYSnTpjY4rzbkOR6a4EPm5lXTdbtAxr7h2gD2Yty2apabsv/aovKILgn7emz9mh1oGRiQW6jH1PXEZgO3/33amOX9l9VZx7x0yI9jJW/sP+2oZlGtkDiBHYYOotYxwgzed0AmP4ICFdcCHqUjRXmGr4VAxrfYOxjblwxK0SgnoyBPt3w5ZZU2Q4n7GKOxDV/h0xs+FtDQootm6Gizuav8LGUuEBMVy4MMNS+tbEfUf15f0wIXB+K28ZZn7G6U2Q05RfXDM8IyCwk7dfK2gtH3Hvvikr1C0SuJ2tb0PFHzpjmQvqdNHS6MW2GjEkFpabmMi+UBArsc2sZYeNSCSzCXvH+JCUt6g2e6nAjXx+p7aRsSxzDQH1o8JKpm93IddhfUy33oAYOqnoBXYaXZzOjb9QhjQMfX6BgO25ummxHK+VrSoCp3XLVChABR64Ng2T4G+29f510c7s1cDmXv1XyCGCAKLCjwjtb47h8pNyULNUW42ed6dhnXvSnWiTytDO8SMC3tiHRV37dQwJ3ToOyjBGKf7qmtZruJOn32q5mxjuuu7Yy5OzWlDVb/83CrSAGIKnI+e1IeU3XHhWVlXc5RMwVGJW3vNq5qy9A7XuRwAJUg42tt5bVJv9PJ83I+GtKoTKRt7KVE8yVJ2no4lHgbUTU2V63oUoSSPDK173cFfNnWgxZTtjHGZdMmsK6Sr8akrspeulJ+Kmu7ZnRaxfarXqL24kP9P9tDgeLE1VxOR3Z3bZXgTq0vgpRyY6IOohUUwuL3VXMY85bHjRejgSNtc/xrrEm6a8dC3LdutjGct+v2bY9Uxk3aKrsr6r+J6W19EAVkojUXF0CQTVK62Wz0MwFC2J+vhTeJM7DZrTTvGG878pnfuprOx6Ky+GDj5kZuk8zWSMiGnZ+XpNIT6dJxCZLz9L5ugDnVAC8/k8eJY7D8V0YvEx31lu6aj2EaHaztNb2Z86pQ1R9otGcRNQ0aa+Lhpza7U9O3s3s/4vWaAx7/H3OUOwOZ6TSqHQjSnMBzVLuXN0YDJJUHjh8Bo8coICFMBuDQIB0nCCzVwVsep1i6Jr1YBfoEC4MWvP1hBRNGXbrVtuDe5u/34QAwJ2jkzIcwIoP62IkqiLodRkcAyFc+S9o+JIaaGjcUujo913679S50cddWs7BHjPbXcBzWgdmw3YcM16zQtwnTnDLL5qrTG/nQV2jvHhHbZkorpUoS4pqFnK4Ub0U9mo9OizBlb9c1IBtTdZmwY8M9sybKsY8PGo7pnZRz5VB+HLjFGcZwxRbcyMW3ObJxW6Ch4k01LLc4kTDXYYJBjQzWv5E81tN0ZXwBDVnj6byL+HrTqVMZZdrG/WYMsczKztFG/e7+cgqWaN/I8x9vv+5RpGxjgRg/CgsTyeZp3z9IGWcsuID+zUO3Vu90fEU5x+VKdPNbHaoJEupnt5azCYKFRW2iz5EAnTIM8ee/M7BlpMVmIKlZteR1fE2CqjWLvfmSfwR9u03+yWy/uuHd77UPPPB1UVoAoXCqlQSUyzgejRxCTghQBP1nw7MdxbuOnp0nRudFLpfOAOAf+aM31Fassqbr2tKYoWg7X1Voq3bmSotIGH2wjkwYFLqRe36hnD3ivH/A0JGiHyUPneuC/CEZPN4NgxoD/0UM8ISgxF7yw2+S6VKRAor9uGGT6maLhz9d9+d+j2s2aYrRSvNbeNjrL8PAFrrl03meHDBzQi9NmQaaTmYsonrKT0dDngo1FTI73jCyk0/qQMunrvOIIERNdV3FeFp0Im47pbmzGgbGTZFyyzHq/XDsMh9hA5ZXs2m3czWXceQkf2MRQwflEY1n0Mo7nngQmaFviVRPSkNmUneFg6m+sBAf3l+mx4NFnHNg7QVnu3cX/xBAJRdt9uzhMFwO2dXzbexqBf96lI5pcWk50zSLqzogZKEODGaI91WNKTz+kW01uHEuc3t5shs5w9trfRLgrm3TWvCrjmFufubsiCotDfRaNBwfdHEhWtjObSnQz1QiPo20P4hz2E263bKwif0plGh7Zb7+75CVOpSd3H0fS1rPhHKplqlj1r5N19ECM0LqGRsz9BpzaejYqlruOouYcBT1Kg8Q8S/oUeksRQKbG6BIig4R791xQOAmtZq72dGnTZUXpG2IzHDfMwiArHbXcPEkB9ZDwcsT8g5GgQaYLQ2mDpf3MEfDc9IrIKpM+AYihxHwd8XhiSx+P+ZSCK0ZHxpwpWz+qqAGAj0y452MZsZNYIn4S7CdBmsU7do/G+oxmI7bJEVe7d7uGJxcq3KhcsQ05VVv2yJp1OTTeBOnR2UVBw4u0Vx6q2drgeP8HQKlZhdc6w6hZ1jx0UoSpTH5HTT5y2Lek3HkIMg2VIHPAPXwlKSo/eK6tYlk/N0LdWIpo/0mjmy811N39iYdKV+ToGfi6a1tz7muZnqPFYmSzkJD0qdRsxPfEPKiWDPRHNyXgpOT3C1ju71SI9saLyx+ZDUJARYjeVIEhFNml31KOYslNs+f16eKsc297LenGtn2HcyPyp8H/N7P1Z8/W5IRbpNpYrYpQdK+7WGqUfHgenug8BNRWtsqY0tgioDP3oX4AkplFXdrC2//PPL/e3P/JHLXmOjGqv7Vmv0cDIz0CgVHfyGdfyUzTDdmZNURwE/S6ClzFYmbjROz2kh1aDv/cFaxjfvxNiv1Ef/mMSEOxrTUPKx7/+PTY35rp5Nzs3V3/XnmyYNaXXvc2GaTQaLlEq+x+sjslqGPbsLiJIUfzZXkB9xDd6b4ZSYiVwgqzZFTeorBFFMbnaVGOOwh44YdE7BLs7+bv5wxxTJB7JbrdzMALd7dHmnOGtw3rdrSIaYCGlujGbYUGHEY8YzIhWZltB8lFDNOYJD5rTt9KlU4oJ04lGf24l4JcTJelG5UX5yMcTRDQkb+YzfptYxY/+3DvxyputMvyeN7cJBLW3H7JuhMa5cSbk3h90FCR4rJYnz6o7556B/twsgb+v6ClpQcVCO53mEISqW13dytaWrPkrRKhWN71gImy6LxXPskgD3MGGm3HNeDh/98+YwvlP+8j848VCrnR6irayEFiCphMyGh191lCHjvvrtZiyRlVYp8C2foHQ70QIWhuLGK1t02VNMGxH0RSIavtbdOHW5yF1EuR4lwHwwQ85PVc6tZAwXCpDuS8MBTC5AlRB49v5JoHVZsOm4a0zCu9fVmazgyBHfcdGpmVE29hyNJmnFBGhwS8NJd78KgONk6EXDaqYBsR8Y6oSioZE6RSG6VLyBcu59YUhh7pSJ2B+rj1D40ytRCL0Y+Z3iDsLDaD2vp1hczeAdswfCB1VcOpJMVyZODuvl46OL6lyf9Yhu82ka+RGsa2hjXyxODdXzGazd3dJdwkUzrfXqlWc9wfvDoF+FzGklp8nxTMT7NS2y2AosOJvJ3BHQZA1Huzl24kKqxje2a7Jcrm6tlkmTlcpBYGdYnuV1mvgeB/Cmr8bU6A+YiJ09t0o+vT4AuBJ/66W9D1wAt9mD2fobHH2HY+Ek9/Unn2O/NrygsK4Yb/SYr1aarCDlafjn6zilb6Z7u9Nfb5hH9dZrMybGlVqpwZSdH0p1bA962m0fPav7sqaBxksPazkPtkvICYf9JWgj6OgvG2377objhbraZgjihrc9zYbg2q0cLVHvwnv3E+mQtInb5ZKT5f7ffnp0ZiULU9BR+i8k6mIQSdOsB6bR9Y0zqHSJm4aZrye/8D5D2fR7UtT+cbzpM6CljPtRyPvxCS4KoawOmYdRj+1T/SmQ5YIjtVmbdamQHfdVsf2IVi29yb/3cQ5WjxFiUaGjT7pmZMUwWamZUIamn+q+xfwZawoa3N5utvkMzMf/SUZVSVq+V7lPI0CYkjMPQFq3287a496Jt/SYnO9lpUPdIvd3qt/WAPgVcaK2+4m6jxWqfLNxcLZTrDNUJRuN4jT9xv62gzrrfKDFe8xR6kkp8ITQYfXeAftj9mm7f6llOt5GkfQUPfI6EOKpiqTyeFPOME2JGpCof/XSB4SxGHbqz64H3q0U0IttrO9S60HacgbW7eY5jFUNH93R+6oyseG1MZq8tM+om3E0cDzwKdzBGUrb1iM4YbSYxnCg+zcXfffm2s1ItfmPFXHZnMNEL9o427CldEb7Gqac0FKPQ04/XQ2Q9vy7o5xf+vBEMPtLMtvZzJzb0F5jBKMW9kypvEy16q4CKwfXQCNZwVdFPXz2JDdQTTRGLqaq4c9ho7txe2W9V456QiJssMSpYZpzFU1RIOniFV85YtMBIGXNRU0SynxvL1I6ZKenMR9FKTdDOlO49kwEnbVk1sNInu2twtZ9Y8Cqu2NFe/udXhNfkjF6EliOH1KsqnHFI3mpsuqdlVXnTKGr7wKaLxeXDvpLVg912OYfwUgUfDBuwOno/tZpgZcvBPtXXXtzVBPrgDZuaqLMRmJt95FDmGj+CPgHH+7OpQR/NWTA4Y59pIyJAKE6Dg7pWIoyPjB+HBJv8AdhOno3x12TOgKGVaLrWR23v2JaD4ZJkMF7BotRWdlqiensKYR0JiqXPAAQHq8ebWX03IQvW8Fh4Zdr/nrDZCg2OtWiZC1ip5kyDrvUqEeJeUzMfEc9yf9dCpDJfaTF7db4dnMh5rj8xiIzGRbnsQovj154SHPa8+S0Zx+rm7AY1Qa8tVeqMwRrbxuGV6VpW6v12j8QFiekEq13fdFz4/UzcxsTOkUPDLPg2b01gUP4ehSKbECcGAdwedjKGjgp6I1690iY+Xz+2UFQfqXUnsZznsHBsOzkczb7ksrZVyerIjiuVodjxFN31pWsHrF1/DzAhLe2F422LQMy32/s31QPXi3U88clpZMy5yRu9UA67xLl84r09qQ9MISj7mrviSaIK22nveywSxbauazGTeTsfOWaYStSCRs0LlL4yShvb1A6GVDc1JUP7eb9+iFJCkxycvc1d/czvFg/sQNK+30KZu58757AKHGuiqWKxc/BSdR4bqIrnYfbTNkxzzcyIm2IOZC6oYdnwf+ZAUeAgsTlzran05XHqvwOl6+4x0mX3PN8MkWC8s21w+gP+gguPykkj5XKN+FqH77AVCvTMx0gnoCsF23rVbV4ghm2Mq+qR33HfIYEdZ5FzpnKN8JcXjKAQE3XpwbHMvC1Gbm8n4rWpZRtPc7EvsxFU3evnVBF9GGPtK4zncJMJUJfvrRtn33VObNTQf5dRxWG6zz7rzvEegyYWHhrMvLr4Qh0cj8zpabzWTymUym/ttaGRAitxP3gtdVQcP405qMz6RHY6YXmFzv2xI8Pw5Aeff3t3/+ufm2WgPHWWOq0XhVbTxLXvaidr10a5m1XV07Q+YNNIhY242A/AVBlkxbkEYufRe9mC41wDUTbDN0sAek+fv1NRUr/3VbKl36sn1ptMlfN8E2RUGj5ATCgou2B3Qw66pIsj7iyxCkW5M4vsJfbUDRG1xv3IxxzoPbl7+9R5LShRfoy3iRYG+G2s3G1Og3l38ZhCTdeeaowhfxXq+eBAFeiabE6cu/EEK8saiomvOFvDmomx6ShfKz26zkeVl6odDIYjngdvzPQTdDrDaliXT6M67QSo+UGvgLYtjFEShP70Sjp76s61wM/1gCfNBdsp+FtvEggjJYWi1E07p+rorLKQRvNzHP9b+gfSEcekGC2QGQyxuPQacEwbVE9WeDEaSheGMq+XlX2EnijYkmUK9dyvQAx05BLkQT4kXz2V0YLrEDsF/g69cwcnD5XkFnuaPLGzAqpSeWAAeCPvUTBARNbS4mLpGJ6YA+wg74XjeX3qAMG4sXvsqmG6mHDfClvhEZI4zLy6nLXLjUApvcyanykMB9UY6wE6pyryKKl1yHdAlWHilDX+ImegzhJrw/mr6kGaX06H1VCOzCkv6Ahvpg4bTTPJ9CbmIB8zK5zszap4E5QcXfrhZCF4qaqIOhf6eWGyAGgz6T1g+oQ3Qx6tMXsR4Ls354ovBfpJA5CQ2zKtqtT/M6JiiFRlLfA6x+HQw5mapT3Hh4gUKani7QGUpneJ9OivQJk4W0qEc/HUFJodxIoe/t6cGDTrelqYQunXFA62iKFpa/5b+IhNMFQXhlZSLxSdeoJybuO0PyVzU9D4GhABr3KsNU4PQM9+n2kiuVhiv3GirW0BeVkjk/BB40V2+HStFoj4gxLZai6R8eNuEXLmLOBKSOA61MJ0Q9dJJhlN0NtkL5BXbb0zWAOkbnJi4/mE72YDicmH5QVlWIvy4X0QUBYHZwvrxSSooiVWbeZJUkKVoSK6H7ZZ5+w5cbJ10A3BAu34+O6iVpmF0ZFpX0W+OlFUVVr6Zp+yqgYHWIX5gav+XliNOpieXvWUoAOdc9sMAgCIImY7D0IloZGRldfPGYynPkqMLXvABPQXnh2bOFsqd4/iPBqUN0d/Uu7LnuofQJRBOIgOF/LD/2RhcgyCr+j/APAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAA/x/iP8DOOxE/wNOSOsAAAAASUVORK5CYII="
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link 
                    to ="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white"
                    aria-current="page"
                  >
                    NACIONAL.COM
                  </Link>
                  <Link
                    to="/category/remeras"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white"
                  >
                    REMERAS
                  </Link>
                  <Link
                    to="/category/accesorios"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white"
                  >
                    ACCESORIOS
                  </Link>
                  <Link
                    to="/category/pantalones"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-700 hover:text-white"
                  >
                    PANTALONES
                  </Link>
                  <Link
              to="/Contacto"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:bg-red-700 hover:text-white"
            >
              CONTACTO
            </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
              </button>
                <CartWidget />
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:bg-red-700 hover:text-white"
              aria-current="page"
            >
              NACIONAL.COM
            </Link>
            <Link
              to="/category/remeras"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:bg-red-700 hover:text-white"
            >
              REMERAS
            </Link>
            <Link
              to="/category/accesorios"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:bg-red-700 hover:text-white"
            >
              ACCESORIOS
            </Link>
            <Link
              to="/category/pantalones"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:bg-red-700 hover:text-white"
            >
              PANTALONES
            </Link>
            <Link
              to="/Contacto"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:bg-red-700 hover:text-white"
            >
              CONTACTO
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
