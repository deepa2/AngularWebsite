import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(tags: any, searchText: any): any {
        if (searchText == null || searchText == '') {
            return tags;
        } else {
            return tags.filter(function (obj) {
                return (obj.body.toLowerCase().indexOf(searchText.toLowerCase()) != -1 || obj.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1);
            });
        }
    }
}