import React from "react"
import Workspace from "../../../workspace"
import { DetailsList } from '@fluentui/react/lib/DetailsList';
import { Breadcrumb } from '@fluentui/react/lib/Breadcrumb';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';

import { useEmpresaDocuemnts } from "./hook"

const EmpresaDocuemnts = () => {

  const { items, onClock } = useEmpresaDocuemnts()

  const getIconFile = (name) => {
    const s = name.split('.')
    if (s[1]) {
      return {
        icon: `https://static2.sharepointonline.com/files/fabric/assets/item-types/16/${s[1]}.svg`,
        alt: s[1]
      }
    } else {
      return {
        icon: `https://static2.sharepointonline.com/files/fabric/assets/item-types/16/folder.svg`,
        alt: "folder"
      }
    }
  }

  const classNames = mergeStyleSets({
    fileIconHeaderIcon: {
      padding: 0,
      fontSize: '16px',
    },
    fileIconCell: {
      textAlign: 'center',
      selectors: {
        '&:before': {
          content: '.',
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '100%',
          width: '0px',
          visibility: 'hidden',
        },
      },
    },
    fileIconImg: {
      verticalAlign: 'middle',
      maxHeight: '16px',
      maxWidth: '16px',
    },
    controlWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    exampleToggle: {
      display: 'inline-block',
      marginBottom: '10px',
      marginRight: '30px',
    },
    selectionDetails: {
      marginBottom: '20px',
    },
  });

  const onClick = (item) => {
    console.log(item)
    alert('click')
  }

  const columns = [
    {
      key: 'column1',
      name: 'File Type',
      className: classNames.fileIconCell,
      iconClassName: classNames.fileIconHeaderIcon,
      ariaLabel: 'Column operations for File type, Press to sort on File type',
      //iconName: 'Page',
      //isIconOnly: true,
      fieldName: 'name',
      minWidth: 16,
      maxWidth: 16,
      //onColumnClick: this._onColumnClick,
      onRender: (item) => {
        const { icon, alt } = getIconFile(item.name)
        return <TooltipHost content={`${alt} file`}>
          <img src={icon} className={classNames.fileIconImg} alt={`${alt} file icon`} />
        </TooltipHost>
      }
    },
    {
      key: 'column2',
      name: 'Name',
      fieldName: 'name',
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      //isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      //onColumnClick: this._onColumnClick,
      data: 'string',
      isPadded: true,
    },
    {
      key: 'column3',
      name: 'Date Modified',
      fieldName: 'dateModifiedValue',
      minWidth: 70,
      maxWidth: 150,
      isResizable: true,
      //onColumnClick: this._onColumnClick,
      data: 'number',
      onRender: (item) => {
        return <span>{item.lastModifiedDateTime}</span>;
      },
      isPadded: true,
    },
    {
      key: 'column4',
      name: 'File Size',
      fieldName: 'fileSizeRaw',
      minWidth: 70,
      maxWidth: 150,
      isResizable: true,
      isCollapsible: true,
      data: 'number',
      //onColumnClick: this._onColumnClick,
      onRender: (item) => {
        return <span>{item.size}</span>;
      },
    },
  ];

  const itemsWithHref = [
    // Normally each breadcrumb would have a unique href, but to make the navigation less disruptive
    // in the example, it uses the breadcrumb page as the href for all the items
    { text: 'Files', key: 'Files', href: '#/controls/web/breadcrumb' },
    { text: 'Folder 1', key: 'f1', href: '#/controls/web/breadcrumb' },
    { text: 'Folder 2', key: 'f2', href: '#/controls/web/breadcrumb' },
    { text: 'Folder 3', key: 'f3', href: '#/controls/web/breadcrumb' },
    { text: 'Folder 4 ', key: 'f4' },
    { text: 'Folder 5', key: 'f5', href: '#/controls/web/breadcrumb' },
  ];


  return (
    <Workspace>
      Detalle de la empresa
      <Breadcrumb
        items={itemsWithHref}
        maxDisplayedItems={10}
        ariaLabel="Breadcrumb with items rendered as buttons"
        overflowAriaLabel="More links"
      />

      <DetailsList items={items} columns={columns} onItemInvoked={onClock} />

    </Workspace>
  )

}


export default EmpresaDocuemnts