describe('PostsComponent', () => {
  let component:PostsComponent
  let service:PostsService
  let fixture:ComponentnFixture<PostsComponent>
  beforeEach(()=>{
    // service=new PostsService(null)
    // component=new PostsComponent(service)
    TestBed.configureTesitingModule({
      declarations:[PostsComponent],
      providers:[PostsService],
      imports:[HttpClientModule]
    })
    fixture=TestBed.createComponent(PostsComponent)
    component=fixture.componentInstance
    // service=fixture.debugElement.injector.get(PostsService)
    service=TestBed.get(PostsService)
  })
  it('should fetch posts on ngOnInit',()=>{

    const posts=[1,2,3]

    spyOn(service,'fetch').and.returnValue(of(posts))
    fixture.detectChanges()
    expect(component.posts).toEqual(posts)
  })
  it('should fetch posts on ngOnInit(promise)',fakeAsync (()=>{

    const posts=[1,2,3]

    spyOn(service,'fetchPromise').and.returnValue(Promise.resolve(posts))
    fixture.detectChanges()
    tick()
    expect(component.posts).toBe(posts.length)
    // fixture.whenStable().then(()=>{
    //   expect(component.posts).toBe(posts.length)
    // })

  }))

  // it('should call fetch when ngOnInit', () => {
  //   const spy=spyOn(service,'fetch').and.callFake(()=>{
  //     return EMPTY
  //   })
  //   component.ngOnInit()
  //   expect(spy).toHaveBeenCalled()
  // })
  // it('should update posts length after ngOnInit', () => {
  //   const posts=[1,2,3,4]
  //   spyOn(service,'fetch').and.returnValue(of(posts))
  //   component.ngOnInit()
  //   expect(component.posts.length).toBe(posts.length)
  // })
  // it('should add new post', () => {
  //   const post={title:'test'}
  //   const spy=spyOn(service,'create').and.returnValue(post)
  //   component.add(post.title)
  //   expect(spy).toHaveBeenCalled()
  //   expect(component.posts.includes(post)).toBeTruthy()
  // })
  // it('should set message to error message', () => {
  //   const error='error message'
  //   const spy=spyOn(service,'create').and.returnValue(throwError(error))
  //   component.add('post.title')

  //   expect(component.message).toBe(error)
  // })
  // it('should remove post if user confirms', () => {

  //   const spy=spyOn(service,'remove').and.returnValue(EMPTY)
  //   spyOn(window,'confirm').and.returnValue(true)
  //   component.delete(10)

  //   expect(spy).toHaveBeenCalledWith(10)
  // })
  // it('should NOT remove post if user  doesnt confirms', () => {

  //   const spy=spyOn(service,'remove').and.returnValue(EMPTY)
  //   spyOn(window,'confirm').and.returnValue(false)
  //   component.delete(10)

  //   expect(spy).not.toHaveBeenCalled()
  // })

})
