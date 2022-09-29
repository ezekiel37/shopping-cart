/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon , ChevronUpIcon} from '@heroicons/react/20/solid'

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}


const DropDown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-gray-700 ">
          $
          {open ? <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> : 
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-20  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor:pointer'
                  )}
                >
                  $ USD
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  &euro; EUR
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 &yen; JPY
                </span>
              )}
            </Menu.Item>
          </div>
         
         
        </Menu.Items>
      </Transition>
 </>
      )}
    </Menu>
  )
}

export default DropDown