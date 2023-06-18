import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

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
      { name: "Compte de l'Etudiant", to: '/etudiantCompte',restrictTo:["Prof","Etudiant"] },

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

export default function HeaderCustom2() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className={classNames(
                      item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    {item.name}
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
