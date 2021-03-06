import { Component, Input, ComponentFactoryResolver, Inject, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContentService, ServiceLocator } from '@angular-cms/core';
import { TreeNode } from '../shared/tree/tree-node';
import { TreeService } from '../shared/tree/tree-service';
import { PageService } from './page.service';

@Component({
    template: `
        <li class="nav-item nav-dropdown open">
            <a class="nav-link">
                <i class="fa fa-sitemap fa-fw"></i>
                Pages
                <span class="badge badge-info" [routerLink]="['new/page']">NEW</span>
            </a>
            <ul class="nav-dropdown-items">
                <li class="nav-item">
                    <cms-tree 
                        class="tree-root" 
                        [root]="root" 
                        [treeService]="pageService"
                        (nodeSelected)="nodeSelected($event)"></cms-tree>
                </li>
            </ul>
        </li>
        `,
    styles: [`
        .tree-root {
            margin-left: 10px;
            display:block;
        }
        `]
})
export class PageTreeComponent {
    root: TreeNode = null;
    pageService = ServiceLocator.Instance.get(PageService);

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.root = new TreeNode('000000000000000000000000', "");
    }

    nodeSelected(node) {
        this.router.navigate(["content/page", node.id], {relativeTo: this.route})
    }
}