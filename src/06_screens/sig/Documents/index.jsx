import React from "react"
import Workspace from "../../../workspace"
import { DetailsList } from '@fluentui/react/lib/DetailsList';
import { Breadcrumb } from '@fluentui/react/lib/Breadcrumb';
import { CommandBar } from '@fluentui/react/lib/CommandBar';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import { useEmpresaDocuemnts } from "./hook"
import { Icon } from '@fluentui/react/lib/Icon';
import { getFileTypeIconProps, FileIconType } from "@fluentui/react-file-type-icons"
const EmpresaDocuemnts = () => {

    const {
        items,
        breadcbm,
        onClick
    } = useEmpresaDocuemnts()

    const getIconFile = (name) => {
        const s = name.split('.')
        if (s[1]) {
            return {
                icon: { ...getFileTypeIconProps({ extension: s[1], size: 16, imageFileType: 'svg' }) },
                alt: s[1]
            }
        } else {
            return {
                icon: { ...getFileTypeIconProps({ type: FileIconType.folder, size: 16, imageFileType: 'svg' }) },
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
                    <Icon {...icon} />
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


    const itemsCommand = [
        {
            key: 'newItem',
            text: 'New',
            cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
            iconProps: { iconName: 'Add' },
            subMenuProps: {
                items: [
                    {
                        key: 'newFolder',
                        text: 'Folder',
                        iconProps: { ...getFileTypeIconProps({ type: FileIconType.folder, size: 32, imageFileType: 'svg' }) }
                    }, {
                        key: 'WordDocument',
                        text: 'Word document',
                        iconProps: { ...getFileTypeIconProps({ extension: 'docx', size: 32, imageFileType: 'svg' }) }
                    }, {
                        key: 'ExcelWorkbook',
                        text: 'Excel workbook',
                        iconProps: { ...getFileTypeIconProps({ extension: 'xlsx', size: 32, imageFileType: 'svg' }) }
                    }, {
                        key: 'PowerPointPresent',
                        text: 'PowerPoint presentation',
                        iconProps: { ...getFileTypeIconProps({ extension: 'pptx', size: 32, imageFileType: 'svg' }) }
                    },
                ],
            },
        },
        {
            key: 'upload',
            text: 'Upload',
            iconProps: { iconName: 'Upload' },
        },
        {
            key: 'download',
            text: 'Download',
            iconProps: { iconName: 'Download' },
            onClick: (e, item) => console.log('Download', e.target, item),
        },
    ];


    const _overflowItems = [
        { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
        { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
        { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
    ];

    const overflowProps = { ariaLabel: 'More commands' };


    function _getCustomDivider(dividerProps) {
        const tooltipText = dividerProps.item ? dividerProps.item.text : '';
        return (
            <TooltipHost content={`Show ${tooltipText} contents`} calloutProps={{ gapSpace: 0 }}>
                <span aria-hidden="true" style={{ cursor: 'pointer', padding: 5 }}>{'>'}</span>
            </TooltipHost>
        );
    }


    return (
        <Workspace>

            <Breadcrumb
                items={breadcbm}
                maxDisplayedItems={10}
                ariaLabel="Breadcrumb with items rendered as buttons"
                overflowAriaLabel="More links"
                dividerAs={_getCustomDivider}
            />

            <CommandBar
                items={itemsCommand}
                overflowItems={_overflowItems}
                overflowButtonProps={overflowProps}
                ariaLabel="Inbox actions"
                primaryGroupAriaLabel="Email actions"
                farItemsGroupAriaLabel="More actions"
            />

            <DetailsList items={items} columns={columns} onItemInvoked={onClick} />

        </Workspace>
    )

}


export default EmpresaDocuemnts