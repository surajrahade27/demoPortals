import React, { useEffect, useState } from 'react';
import '../../css/main.css'
import '../../css/normalize.css'
import portal_list from './portals';
import BubblemixLogo from '../../img/Bubblemix.png';
import Ailane from '../../img/Ailane.png'
import './main.css'
import DynamicSelect from '../../component/Select/Select';
import axios from 'axios';
import Select from 'react-select'
export default function SaDashboardBodyContainer() {
    const [options, setOptions] = useState({})
    const [portalOptions, setPortalOptions] = useState({})
    const [error, setError] = useState(false)
    const dummyoptions = [
        { label: 'Active (200)', value: 'active', bgColor: 'var(--color-success)' },
        { label: 'About To Expire (30)', value: 'about-to-expire', bgColor: 'var(--color-warning)' },
        { label: 'Inactive (10)', value: 'inactive', bgColor: 'var(--color-dark)' },
        { label: 'Expired (30)', value: 'expired', bgColor: 'var(--color-danger)' },
        { label: 'View All (230)', value: 'view-all', bgColor: 'var(--color-primary-light)' },
    ];
    useEffect(() => {
        getStatus()
    }, [])
    function handleStatusChange(option) {
        console.log(`Selected status: ${option.label}`);
    }
    const getStatus = () => {
        let uri = '/api/v1/sa/clientstatus';
        console.log(uri)
        axios.get(uri)
            .then((resp) => {
                if (resp.data.errorMessage && resp.data.codeNumber === "0017") {
                    setError(true)
                    setOptions(null)
                } else {
                    setError(false)

                    let _data = [
                        { label: `Active (${resp.data.active})`, value: 'active', bgColor: 'var(--color-success)' },
                        { label: `About To Expire (${resp.data.abouttoexpire})`, value: 'about-to-expire', bgColor: 'var(--color-warning)' },
                        { label: `Inactive (${resp.data.inactive})`, value: 'inactive', bgColor: 'var(--color-dark)' },
                        { label: `Expired (${resp.data.expired})`, value: 'expired', bgColor: 'var(--color-danger)' },
                        { label: `View All (${resp.data.total})`, value: 'view-all', bgColor: 'var(--color-primary-light)' },
                    ]
                    let portals = [
                        { label: `Portals (${resp.data.client})`, value: 'client', bgColor: 'var(--color-success)' },
                        { label: `SM Portals (${resp.data.smclient})`, value: 'smclient', bgColor: 'var(--color-warning)' },
                    ]
                    setPortalOptions(portals)
                    setOptions(_data)
                    console.log(_data)
                }

            }).catch((error) => {
                setError(true)
                setOptions(null)
            })
    }
    return (
        <>
            <div className="row mt-4 mb-4">
                <div className="col-12">
                    <div className="flex-table flex-table-gap flex-table-mobile">
                        <aside className="flex-item-spread">
                            <h1 className="heading">Manage Portals</h1>
                            <h6 className="sub-heading">View and Manage all created portals here</h6>
                        </aside>
                        <aside>
                            <div className="flex-table flex-table-wrap flex-table-gap">
                                <aside>
                                    <button type="button" className="btn btn-icon-label btn-primary"><div className="icon-link icon-link-sm icn-add-small"></div><span>Create New</span></button>
                                </aside>
                                {/* <!-- <aside>
										<div className="btn-group">
											<button type="button" className="btn btn-icon-label hasTooltip"><div className="tooltip">Upload</div><div className="icon-link icon-link-sm icn-upload"></div></button>
											<button type="button" className="btn btn-icon-label hasTooltip"><div className="tooltip">Filter</div><div className="icon-link icon-link-sm icn-filter-1"></div></button>
											<button type="button" className="btn btn-icon-label hasTooltip"><div className="tooltip">Delete</div><div className="icon-link icon-link-sm icn-delete"></div></button>
										</div>
									</aside>
									<aside>
										<div className="dotmenu">
											<button type="button" className="btn btn-icon-label hasTooltip dotmenu-label"><div className="tooltip">Quick Links</div><div className="icon-link icon-link-sm icn-menu-2"></div></button>
											<div className="dropdown-content">
												<a href="#" className="icon-link icon-link-sm icn-arrow-right-2">Export Data</a>
												<a href="#" className="icon-link icon-link-sm icn-printer-1">Print Data</a>
											</div>
										</div>
									</aside> --> */}
                            </div>
                        </aside>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12 mb-4">
                    <div className="card">
                        <div className="row mt-4 mx-2" id="tag-list">
                            <div className="col-12">
                                <div className="tag-list">
                                    <aside>
                                        <a href="#" className="tag">
                                            <div className="tag-content">
                                                <div className="flex-table flex-table-left align-items-center">
                                                    <aside>
                                                        <div className="avatar avatar-xs avatar-no-radius"><img
                                                            src={BubblemixLogo} /></div>
                                                    </aside>
                                                    <aside>
                                                        <h6 className="bold">Bubblemix</h6>
                                                        <div className="display-8">bubblemix.upsidelms.com</div>
                                                    </aside>
                                                </div>
                                            </div>
                                            <div className="tag-action"></div>
                                        </a>
                                    </aside>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-2 mt-3 list-filter-set">
                            <div className="col-12 col-md-3 col-lg-3 mb-4 list-filter">
                                <div className="form-group">
                                    <label>Search</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="txtSearchTable" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-4 list-filter">
                                <div className="form-group">
                                    <label>Type</label>
                                    <Select options={portalOptions} defaultValue={portalOptions[0]} value={portalOptions[0]} />
                                    {/* <div className="dropdown">
                                        <a href="#" className="dropdown-label">
                                            <span className="bold">Portals</span> (300)
                                        </a>
                                        <div className="dropdown-content">
                                            <a href="#">
                                                <span className="bold">Portals</span> (300)
                                            </a>
                                            <a href="#">
                                                <span className="bold">SM Portals</span> (200)
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-4 list-filter">
                                {/* <DynamicSelect label="Status" options={options} onChange={handleStatusChange} /> */}

                                <div className="form-group">
                                    <label>Status</label>
                                    <Select options={options} defaultValue={options[0]} value={options[0]} />

                                    {/* <div className="dropdown">
                                        <a href="#" className="dropdown-label">
                                            <div className="flex-table flex-table-left-sm align-items-baseline">
                                                <aside>
                                                    <div className="badge badge-dot" style={{ '--bgcolor': 'var(--color-success)' }}></div>
                                                </aside>
                                                <aside className="flex-item-spread ellipsis">Active (200)</aside>
                                            </div>
                                        </a>
                                        <div className="dropdown-content">
                                            <a href="#">
                                                <div className="flex-table flex-table-left-sm align-items-baseline">
                                                    <aside>
                                                        <div className="badge badge-dot" style={{ '--bgcolor': 'var(--color-success)' }}></div>
                                                    </aside>
                                                    <aside className="flex-item-spread ellipsis">Active (200)</aside>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="flex-table flex-table-left-sm align-items-baseline">
                                                    <aside>
                                                        <div className="badge badge-dot" style={{ '--bgcolor': 'var(--color-warning)' }}></div>
                                                    </aside>
                                                    <aside className="flex-item-spread ellipsis">About To Expire (30)</aside>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="flex-table flex-table-left-sm align-items-baseline">
                                                    <aside>
                                                        <div className="badge badge-dot" style={{ '--bgcolor': 'var(--color-dark)' }}></div>
                                                    </aside>
                                                    <aside className="flex-item-spread ellipsis">Inactive (10)</aside>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="flex-table flex-table-left-sm align-items-baseline">
                                                    <aside>
                                                        <div className="badge badge-dot" style={{ '--bgcolor': 'var(--color-danger)' }}></div>
                                                    </aside>
                                                    <aside className="flex-item-spread ellipsis">Expired (30)</aside>
                                                </div>
                                            </a>
                                            <hr className="dropdown-divider" />
                                            <a href="#">
                                                <div className="flex-table flex-table-left-sm align-items-baseline">
                                                    <aside>
                                                        <div className="badge badge-dot" style={{ '--bgcolor': 'var(--color-primary-light)' }}></div>
                                                    </aside>
                                                    <aside className="flex-item-spread ellipsis">View All (230)</aside>
                                                </div>
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-4 list-filter2">
                                <a href="#" className="show-filters">Show More</a>
                            </div>
                        </div>
                        <div className="dataTable">
                            <div id="tblPortals_wrapper" className="dataTables_wrapper no-footer">
                                <table
                                    cellSpacing="0"
                                    cellPadding="0"
                                    width="100%"
                                    id="tblPortals"
                                    className="dataTable no-footer dtr-inline dtfc-has-left"
                                    style={{ width: "100%" }}
                                >
                                    <thead>
                                        <tr>
                                            <th className="th-responsive-plus sorting_disabled dtfc-fixed-left" width="1" rowspan="1" colspan="1" style={{ width: "1px", left: "0px", position: "sticky" }} aria-label=""></th>
                                            <th className="sorting sorting_asc dtfc-fixed-left" tabIndex="0" aria-controls="tblPortals" rowspan="1" colspan="1" style={{ width: "461px", left: "10.9766px", position: "sticky" }} aria-sort="ascending" aria-label="Portal: activate to sort column descending">Portal</th>
                                            <th width="120" className="sorting" tabIndex="0" aria-controls="tblPortals" rowspan="1" colspan="1" style={{ width: "120px" }} aria-label="Licenses: activate to sort column ascending">Licenses</th>
                                            <th width="50" className="sorting" tabIndex="0" aria-controls="tblPortals" rowspan="1" colspan="1" style={{ width: "51px" }} aria-label="Portals: activate to sort column ascending">Portals</th>
                                            <th width="50" className="sorting" tabIndex="0" aria-controls="tblPortals" rowspan="1" colspan="1" style={{ width: "71px" }} aria-label="Timezone: activate to sort column ascending">Timezone</th>
                                            <th width="100" className="sorting" tabIndex="0" aria-controls="tblPortals" rowspan="1" colspan="1" style={{ width: "100px" }} aria-label="Expiry: activate to sort column ascending">Expiry</th>
                                            <th width="50" className="sorting" tabIndex="0" aria-controls="tblPortals" rowspan="1" colspan="1" style={{ width: "50px" }} aria-label=": activate to sort column ascending"></th>
                                            <th width="90" className="sorting_disabled" rowspan="1" colspan="1" style={{ width: "141px" }} aria-label=""></th>
                                        </tr>
                                    </thead>
                                    {tableData()}
                                </table>
                                <Pagination currentPage={1} totalPages={5} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const portals = [
    {
        name: "Ailane",
        url: "ailane.upsidelms.com",
        stats: {
            current: 4072,
            total: 8301,
            views: 251,
            time: "+14:28",
            date: "23 May 2024"
        },
        avatar: Ailane
    },
    {
        name: "Birchtree",
        url: "birchtree.upsidelms.com",
        stats: {
            current: 6731,
            total: 10000,
            views: 532,
            time: "+10:09",
            date: "12 Aug 2024"
        },
        status: "InActive"
    },
    {
        name: "Cedar",
        url: "cedar.upsidelms.com",
        stats: {
            current: 3211,
            total: 5000,
            views: 121,
            time: "+04:42",
            date: "30 Apr 2024"
        }
    },
    {
        name: "Daisy",
        url: "daisy.upsidelms.com",
        stats: {
            current: 900,
            total: 1000,
            views: 34,
            time: "+01:08",
            date: "5 Jul 2024"
        },
        status: "Active"
    },
    {
        name: "Evergreen",
        url: "evergreen.upsidelms.com",
        stats: {
            current: 550,
            total: 1000,
            views: 78,
            time: "+03:22",
            date: "19 Nov 2024"
        }
    },
    {
        name: "Fern",
        url: "fern.upsidelms.com",
        stats: {
            current: 2390,
            total: 5000,
            views: 135,
            time: "+06:49",
            date: "7 Sep 2024"
        }
    },
    {
        name: "Ginkgo",
        url: "ginkgo.upsidelms.com",
        stats: {
            current: 1200,
            total: 1500,
            views: 42,
            time: "+02:13",
            date: "31 Dec 2024"
        },
        status: "Expired"
    },
    {
        name: "Hickory",
        url: "hickory.upsidelms.com",
        stats: {
            current: 490,
            total: 1000,
            views: 22,
            time: "+00:57",
            date: "8 Feb 2024"
        }
    },
    {
        name: "Ivy",
        url: "ivy.upsidelms.com",
        stats: {
            current: 780,
            total: 1000,
            views: 58,
            time: "+02:49",
            date: "16 Jul 2024"
        },
        status: "Expiring"
    },
    {
        name: "Jasmine",
        url: "jasmine.upsidelms.com",
        stats: {
            current: 2840,
            total: 5000,
            views: 178,
            time: "+08:33",
            date: "2 Mar 2024"
        }
    },
    {
        name: "Kiwi",
        url: "kiwi.upsidelms.com",
        stats: {
            current: 870,
            total: 1000,
            views: 29,
            time: "+01:22",
            date: "10 Nov 2024"
        },
        status: "InActive"
    },
    // add more portal objects as needed
];
function tableData() {
    return <tbody>
        {portals.map(portal => (
            <PortalRow
                name={portal.name}
                url={portal.url}
                current={portal.stats.current}
                total={portal.stats.total}
                views={portal.stats.views}
                time={portal.stats.time}
                date={portal.stats.date}
                status={portal.status}
                avatar={portal.avatar}
            />
        ))}
    </tbody>;
}
const PortalRow = ({ name, url, current, total, views, time, date, status, avatar }) => {
    return (
        <tr className="even">
            <td className="dtr-control dtfc-fixed-left" style={{ left: 0, position: 'sticky' }}></td>
            <td className="sorting_1 dtfc-fixed-left" style={{ left: 10.9766, position: 'sticky' }}>
                <a href="#" className="flex-table flex-table-left align-items-center table-hero lnkShowPortals">
                    <aside>
                        <div className="form-group avatar avatar-sm">
                            <span className="avatar-initial avatar-radius-sm avatar-color-dark" style={{ '--bgcolor': avatar ? "white" : generateRandomColor() }}>
                                {avatar ? <img src={avatar} /> : name.charAt(0)}
                            </span>
                        </div>
                    </aside>
                    <aside>
                        <h6 className="bold">{name}</h6>
                        <div className="display-8">{url}</div>
                    </aside>
                </a>
            </td>
            <td>
                <h6 className="no-wrap">
                    <span className="bold">{current}</span>
                    <span className="text-gray-light"> / {total}</span>
                </h6>
            </td>
            <td><button type="button" className="btn btn-icon btn-text lnkShowPortals">{views}</button></td>
            <td>
                <h6 className="text-gray-light">{time}</h6>
            </td>
            <td>
                <h6 className="text-gray-light no-wrap">{date}</h6>
            </td>
            <td>
                {renderStatus()}
            </td>

            <td>
                <div className="flex-table flex-table-left-sm align-items-center">
                    <aside>
                        <button type="button" className="btn btn-sm btn-icon-label btn-no-border hasTooltip">
                            <div className="tooltip">Setting</div>
                            <div className="icon-link icn-gear"></div>
                        </button>
                    </aside>
                    <aside>
                        <button type="button" className="btn btn-sm btn-icon-label btn-no-border hasTooltip lnkFavorite">
                            <div className="tooltip">Favorite</div>
                            <div className="icon-link icn-star-1"></div>
                        </button>
                    </aside>
                    <aside>
                        <div className="dotmenu">
                            <button type="button" className="btn btn-sm btn-icon-label btn-no-border hasTooltip dotmenu-label">
                                <div className="tooltip">Quick Links</div>
                                <div className="icon-link icon-link icn-menu-2"></div>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">Settings</a>
                                <a href="#">Edit Portal</a>
                                <a href="#">Branding</a>
                                <hr className="dropdown-divider" />
                                <a href="#">Make Inactive</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </td>
        </tr>
    );

    function renderStatus() {
        let color
        switch (status) {
            case "InActive": color = "dark"
                break
            case "Expired": color = "warning"
                break
            case "Expiring": color = "danger"
                break
            case "Active": color = "sucess"
                break
            default: color = ""
                break
        }
        return <div className={status ? `badge badge-light ${color}` : ""}>{status}</div>;
    }
};
function generateRandomColor() {
    const hueValues = [187, 85, 340, 255]; // an array of specific hue values
    const hueIndex = Math.floor(Math.random() * hueValues.length);
    const hue = hueValues[hueIndex];
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    const alpha = Math.random();

    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
}

function Pagination({ currentPage, totalPages }) {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <a
                key={i}
                className={`paginate_button ${i === currentPage ? "current" : ""}`}
                aria-controls="tblPortals"
                aria-role="link"
                aria-current={i === currentPage ? "page" : null}
                data-dt-idx={i - 1}
                tabIndex="0"
            >
                {i}
            </a>
        );
    }

    return (
        <div className="dataTables_paginate paging_simple_numbers" id="tblPortals_paginate">
            <a
                className={`paginate_button previous ${currentPage === 1 ? "disabled" : ""}`}
                aria-controls="tblPortals"
                aria-disabled={currentPage === 1}
                aria-role="link"
                data-dt-idx="previous"
                tabIndex="-1"
                id="tblPortals_previous"
            >
                <div className="icon-link-button icn-arrow-left-small">Previous</div>
            </a>
            <span>{pages}</span>
            <a
                className={`paginate_button next ${currentPage === totalPages ? "disabled" : ""}`}
                aria-controls="tblPortals"
                aria-disabled={currentPage === totalPages}
                aria-role="link"
                data-dt-idx="next"
                tabIndex="0"
                id="tblPortals_next"
            >
                <div className="icon-link-button icn-arrow-right-small">Next</div>
            </a>
        </div>
    );
}
