/* eslint-disable jsx-a11y/no-redundant-roles */
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link, Route,Switch} from 'react-router-dom'

const navigation = [
  {
    name: 'Admin',
    current: false,
    noAccess:["Prof","Etudiant"],
    children: [
      { name: 'Admins', to: '/admins' },
      { name: 'Utilisateurs', to: '/users' },
    ],
  },
  {
    name: 'Professeurs',
    current: false,
    noAccess:["Etudiant"],
    children: [
      { name: 'Professeurs', to: '/professeurs',restrictTo:["Prof","Etudiant"] },
      { name: 'Seances', to: '/Seances',restrictTo:["Admin","Etudiant"] },
      { name: 'Absences', to: '/Absences',restrictTo:["Admin","Etudiant"] },
      { name: 'Annonces', to: '/annonces',restrictTo:["Admin","Etudiant"] },
      { name: 'Statistiques', to: '/grafs',restrictTo:["Admin","Etudiant"] },
    ],
  },
  {
    name: 'Etudiants',
    current: false,
    noAccess:["Prof"],
    children: [
      { name: 'Etudiants', to: '/etudiants',restrictTo:["Prof","Etudiant"] },
      { name: "Compte de l'Etudiant", to: '/etudiantCompte',restrictTo:["Admin","Prof"] },

    ],
  },
  {
    name: 'Filières',
    noAccess:["Prof","Etudiant"],
    current: false,
    children: [
      { name: 'Filières', to: '/filieres',restrictTo:["Prof","Etudiant"] },

    ],
  },
  {
    name: 'Modules',
    noAccess:["Prof","Etudiant"],
    current: false,
    children: [
      { name: 'Modules', to: '/modules',restrictTo:["Prof","Etudiant"] },

    ],
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SidebarCustom(props) {
  console.log("props.role",props.role)
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 ">
              <div className="flex h-16 shrink-0 items-center">
        <img
          className="ml-2 mt-2 h-10 w-auto"
          src="https://i.ibb.co/tD9mnVd/logo.png"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <Link
                      to={item.to}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700'
                      )}
                    >
                  {item.nam}
                    </Link>
                  ) : (
                    <Disclosure as="div" className={((item.noAccess && item.noAccess.includes(props.role))?" hidden":"")}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                            )}
                          >
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className={"mt-1 px-2"+((item.noAccess && item.noAccess.includes(props.role))?" hidden":"")}>
                            {item.children.map((subItem) => (
                              <li key={subItem.name} hidden={subItem.restrictTo && subItem.restrictTo.includes(props.role)}>
                                <Link
                                  as="a"
                                  to={subItem.to}
                                  hidden={subItem.restrictTo && subItem.restrictTo.includes(props.role)}
                                  className={classNames(
                                    subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
